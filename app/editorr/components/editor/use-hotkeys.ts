import { DEFAULT_FONT } from '../../data/fonts';
import {
  ACTIVE_CLONE,
  ACTIVE_DELETE,
  ADD_TEXT,
  HISTORY_REDO,
  HISTORY_UNDO,
  LAYER_SELECT,
  PLAYER_SEEK_BY,
  PLAYER_TOGGLE_PLAY,
  dispatcher,
} from '@designcombo/core';
import hotkeys from 'hotkeys-js';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

const useHotkeys = () => {
  useEffect(() => {
    if (!dispatcher) {
      console.warn('Dispatcher is not defined');
      return;
    }

    const dispatch = dispatcher.dispatch;

    // اختصار التراجع
    hotkeys('ctrl+z,command+z', (event) => {
      event.preventDefault();
      dispatch(HISTORY_UNDO);
    });

    // اختصار الإعادة
    hotkeys('ctrl+shift+z,command+shift+z', (event) => {
      event.preventDefault();
      dispatch(HISTORY_REDO);
    });

    // اختصار الحفظ (إجراء مخصص)
    hotkeys('ctrl+s,command+s', (event) => {
      event.preventDefault();
      console.log('split action');
    });

    // تكرار العنصر
    hotkeys('ctrl+d,command+d', (event) => {
      event.preventDefault();
      dispatch(ACTIVE_CLONE);
    });

    // حذف العنصر
    hotkeys('backspace,delete', (event) => {
      event.preventDefault();
      dispatch(ACTIVE_DELETE);
    });

    // إلغاء التحديد
    hotkeys('esc', (event) => {
      event.preventDefault();
      dispatch(LAYER_SELECT, { payload: { activeIds: [] } });
    });

    // تشغيل / إيقاف المشغل
    hotkeys('space', (event) => {
      event.preventDefault();
      dispatch(PLAYER_TOGGLE_PLAY);
    });

    // التنقل للأمام / للخلف في الإطار
    hotkeys('down', (event) => {
      event.preventDefault();
      dispatch(PLAYER_SEEK_BY, { payload: { frames: 1 } });
    });

    hotkeys('up', (event) => {
      event.preventDefault();
      dispatch(PLAYER_SEEK_BY, { payload: { frames: -1 } });
    });

    // إضافة نص جديد باستخدام مفتاح "T"
    hotkeys('t', (event) => {
      event.preventDefault();
      dispatch(ADD_TEXT, {
        payload: {
          id: nanoid(),
          details: {
            text: 'Add text',
            fontSize: 62,
            fontFamily: DEFAULT_FONT?.postScriptName || 'Arial',
            fontUrl: DEFAULT_FONT?.url || '',
            width: 400,
            textAlign: 'left',
            color: '#ffffff',
          },
        },
      });
    });

    return () => {
      hotkeys.unbind('ctrl+shift+z,command+shift+z');
      hotkeys.unbind('ctrl+z,command+z');
      hotkeys.unbind('ctrl+s,command+s');
      hotkeys.unbind('ctrl+d,command+d');
      hotkeys.unbind('backspace,delete');
      hotkeys.unbind('esc');
      hotkeys.unbind('down');
      hotkeys.unbind('up');
      hotkeys.unbind('space');
      hotkeys.unbind('t');
    };
  }, []);
};

export default useHotkeys;
