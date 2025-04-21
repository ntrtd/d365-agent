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
import type { RetailButtonGridButtonsImagesApi } from './RetailButtonGridButtonsImagesApi';
import { RetailButtonItemContentAlignmentEnum } from './RetailButtonItemContentAlignmentEnum';
import { RetailGradientMode } from './RetailGradientMode';
import { RetailButtonColorBase } from './RetailButtonColorBase';
import { NoYes } from './NoYes';
import { RetailImageAlignmentTypeBase } from './RetailImageAlignmentTypeBase';
import { RetailFontStyleBase } from './RetailFontStyleBase';

/**
 * This class represents the entity "RetailButtonGridButtonsImages" of service "d365_metadata".
 */
export class RetailButtonGridButtonsImages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailButtonGridButtonsImagesType<T>
{
  /**
   * Technical entity name for RetailButtonGridButtonsImages.
   */
  static override _entityName = 'RetailButtonGridButtonsImages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailButtonGridButtonsImages entity.
   */
  static _keys = [
    'ID',
    'buttonGridId',
    'Action',
    'Col',
    'ColSpan',
    'DisplayText',
    'FontSize',
    'RowNum',
    'RowSpan',
    'PictureId'
  ];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Button Grid Id.
   */
  declare buttonGridId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Col.
   */
  declare col: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Col Span.
   */
  declare colSpan: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Display Text.
   */
  declare displayText: DeserializedType<T, 'Edm.String'>;
  /**
   * Font Size.
   */
  declare fontSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Row Num.
   */
  declare rowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Row Span.
   */
  declare rowSpan: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Notification Content Alignment.
   * @nullable
   */
  declare notificationContentAlignment?: RetailButtonItemContentAlignmentEnum | null;
  /**
   * Action Property.
   * @nullable
   */
  declare actionProperty?: DeserializedType<T, 'Edm.String'> | null;
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
   * Enable Custom Font For Pos.
   * @nullable
   */
  declare enableCustomFontForPos?: NoYes | null;
  /**
   * Hide Button Text.
   * @nullable
   */
  declare hideButtonText?: NoYes | null;
  /**
   * Picture.
   * @nullable
   */
  declare picture?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Back Color.
   */
  declare backColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tooltip.
   * @nullable
   */
  declare tooltip?: DeserializedType<T, 'Edm.String'> | null;
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
   * Enable Live Content.
   * @nullable
   */
  declare enableLiveContent?: NoYes | null;
  /**
   * Border Color.
   */
  declare borderColor: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(_entityApi: RetailButtonGridButtonsImagesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailButtonGridButtonsImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  buttonGridId: DeserializedType<T, 'Edm.String'>;
  action: DeserializedType<T, 'Edm.Int32'>;
  col: DeserializedType<T, 'Edm.Int32'>;
  colSpan: DeserializedType<T, 'Edm.Int32'>;
  displayText: DeserializedType<T, 'Edm.String'>;
  fontSize: DeserializedType<T, 'Edm.Int32'>;
  rowNum: DeserializedType<T, 'Edm.Int32'>;
  rowSpan: DeserializedType<T, 'Edm.Int32'>;
  pictureId: DeserializedType<T, 'Edm.Int32'>;
  notificationContentAlignment?: RetailButtonItemContentAlignmentEnum | null;
  actionProperty?: DeserializedType<T, 'Edm.String'> | null;
  fontColor: DeserializedType<T, 'Edm.Int32'>;
  gradientMode?: RetailGradientMode | null;
  colour?: RetailButtonColorBase | null;
  newTextAlignment?: RetailButtonItemContentAlignmentEnum | null;
  enableCustomFontForPos?: NoYes | null;
  hideButtonText?: NoYes | null;
  picture?: DeserializedType<T, 'Edm.Binary'> | null;
  backColor: DeserializedType<T, 'Edm.Int32'>;
  tooltip?: DeserializedType<T, 'Edm.String'> | null;
  useCustomLookAndFeel?: NoYes | null;
  backColor2: DeserializedType<T, 'Edm.Int32'>;
  imageAlignment?: RetailImageAlignmentTypeBase | null;
  enableLiveContent?: NoYes | null;
  borderColor: DeserializedType<T, 'Edm.Int32'>;
  newImageAlignment?: RetailButtonItemContentAlignmentEnum | null;
  fontStyle?: RetailFontStyleBase | null;
}
