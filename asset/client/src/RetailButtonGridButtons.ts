/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailButtonGridButtonsApi } from './RetailButtonGridButtonsApi';
import { RetailButtonItemContentAlignmentEnum } from './RetailButtonItemContentAlignmentEnum';
import { RetailGradientMode } from './RetailGradientMode';
import { RetailButtonColorBase } from './RetailButtonColorBase';
import { NoYes } from './NoYes';
import { RetailImageAlignmentTypeBase } from './RetailImageAlignmentTypeBase';
import { RetailFontStyleBase } from './RetailFontStyleBase';

/**
 * This class represents the entity "RetailButtonGridButtons" of service "d365_metadata".
 */
export class RetailButtonGridButtons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailButtonGridButtonsType<T>
{
  /**
   * Technical entity name for RetailButtonGridButtons.
   */
  static override _entityName = 'RetailButtonGridButtons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailButtonGridButtons entity.
   */
  static _keys = ['ID', 'buttonGridId'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Button Grid Id.
   */
  declare buttonGridId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action Property.
   * @nullable
   */
  declare actionProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notification Content Alignment.
   * @nullable
   */
  declare notificationContentAlignment?: RetailButtonItemContentAlignmentEnum | null;
  /**
   * Font Color.
   */
  declare fontColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gradient Mode.
   * @nullable
   */
  declare gradientMode?: RetailGradientMode | null;
  /**
   * Colour.
   * @nullable
   */
  declare colour?: RetailButtonColorBase | null;
  /**
   * New Text Alignment.
   * @nullable
   */
  declare newTextAlignment?: RetailButtonItemContentAlignmentEnum | null;
  /**
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Custom Font For Pos.
   * @nullable
   */
  declare enableCustomFontForPos?: NoYes | null;
  /**
   * Font Size.
   */
  declare fontSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Col Span.
   */
  declare colSpan: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hide Button Text.
   * @nullable
   */
  declare hideButtonText?: NoYes | null;
  /**
   * Row Num.
   */
  declare rowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Back Color.
   */
  declare backColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tooltip.
   * @nullable
   */
  declare tooltip?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Row Span.
   */
  declare rowSpan: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Custom Look And Feel.
   * @nullable
   */
  declare useCustomLookAndFeel?: NoYes | null;
  /**
   * Back Color 2.
   */
  declare backColor2: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Image Alignment.
   * @nullable
   */
  declare imageAlignment?: RetailImageAlignmentTypeBase | null;
  /**
   * Display Text.
   * @nullable
   */
  declare displayText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Col.
   */
  declare col: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Border Color.
   */
  declare borderColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Live Content.
   * @nullable
   */
  declare enableLiveContent?: NoYes | null;
  /**
   * New Image Alignment.
   * @nullable
   */
  declare newImageAlignment?: RetailButtonItemContentAlignmentEnum | null;
  /**
   * Font Style.
   * @nullable
   */
  declare fontStyle?: RetailFontStyleBase | null;

  constructor(_entityApi: RetailButtonGridButtonsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailButtonGridButtonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  buttonGridId: DeserializedType<T, 'Edm.String'>;
  actionProperty?: DeserializedType<T, 'Edm.String'> | null;
  notificationContentAlignment?: RetailButtonItemContentAlignmentEnum | null;
  fontColor: DeserializedType<T, 'Edm.Int32'>;
  gradientMode?: RetailGradientMode | null;
  colour?: RetailButtonColorBase | null;
  newTextAlignment?: RetailButtonItemContentAlignmentEnum | null;
  pictureId: DeserializedType<T, 'Edm.Int32'>;
  enableCustomFontForPos?: NoYes | null;
  fontSize: DeserializedType<T, 'Edm.Int32'>;
  colSpan: DeserializedType<T, 'Edm.Int32'>;
  hideButtonText?: NoYes | null;
  rowNum: DeserializedType<T, 'Edm.Int32'>;
  backColor: DeserializedType<T, 'Edm.Int32'>;
  action: DeserializedType<T, 'Edm.Int32'>;
  tooltip?: DeserializedType<T, 'Edm.String'> | null;
  rowSpan: DeserializedType<T, 'Edm.Int32'>;
  useCustomLookAndFeel?: NoYes | null;
  backColor2: DeserializedType<T, 'Edm.Int32'>;
  imageAlignment?: RetailImageAlignmentTypeBase | null;
  displayText?: DeserializedType<T, 'Edm.String'> | null;
  col: DeserializedType<T, 'Edm.Int32'>;
  borderColor: DeserializedType<T, 'Edm.Int32'>;
  enableLiveContent?: NoYes | null;
  newImageAlignment?: RetailButtonItemContentAlignmentEnum | null;
  fontStyle?: RetailFontStyleBase | null;
}
