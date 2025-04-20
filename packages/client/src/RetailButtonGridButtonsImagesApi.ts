/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailButtonGridButtonsImages } from './RetailButtonGridButtonsImages';
import { RetailButtonGridButtonsImagesRequestBuilder } from './RetailButtonGridButtonsImagesRequestBuilder';
import { RetailButtonItemContentAlignmentEnum } from './RetailButtonItemContentAlignmentEnum';
import { RetailGradientMode } from './RetailGradientMode';
import { RetailButtonColorBase } from './RetailButtonColorBase';
import { NoYes } from './NoYes';
import { RetailImageAlignmentTypeBase } from './RetailImageAlignmentTypeBase';
import { RetailFontStyleBase } from './RetailFontStyleBase';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailButtonGridButtonsImagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailButtonGridButtonsImages<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RetailButtonGridButtonsImagesApi<DeSerializersT> {
    return new RetailButtonGridButtonsImagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailButtonGridButtonsImages;

  requestBuilder(): RetailButtonGridButtonsImagesRequestBuilder<DeSerializersT> {
    return new RetailButtonGridButtonsImagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailButtonGridButtonsImages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailButtonGridButtonsImages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailButtonGridButtonsImages<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailButtonGridButtonsImages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailButtonGridButtonsImages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BUTTON_GRID_ID: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COL: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COL_SPAN: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISPLAY_TEXT: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FONT_SIZE: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROW_NUM: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROW_SPAN: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PICTURE_ID: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NOTIFICATION_CONTENT_ALIGNMENT: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailButtonItemContentAlignmentEnum,
      true,
      true
    >;
    ACTION_PROPERTY: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FONT_COLOR: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GRADIENT_MODE: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailGradientMode,
      true,
      true
    >;
    COLOUR: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailButtonColorBase,
      true,
      true
    >;
    NEW_TEXT_ALIGNMENT: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailButtonItemContentAlignmentEnum,
      true,
      true
    >;
    ENABLE_CUSTOM_FONT_FOR_POS: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIDE_BUTTON_TEXT: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PICTURE: EdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    BACK_COLOR: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOOLTIP: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CUSTOM_LOOK_AND_FEEL: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BACK_COLOR_2: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IMAGE_ALIGNMENT: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailImageAlignmentTypeBase,
      true,
      true
    >;
    ENABLE_LIVE_CONTENT: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BORDER_COLOR: OrderableEdmTypeField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEW_IMAGE_ALIGNMENT: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailButtonItemContentAlignmentEnum,
      true,
      true
    >;
    FONT_STYLE: EnumField<
      RetailButtonGridButtonsImages<DeSerializers>,
      DeSerializersT,
      RetailFontStyleBase,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailButtonGridButtonsImages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link buttonGridId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUTTON_GRID_ID: fieldBuilder.buildEdmTypeField(
          'buttonGridId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.Int32', false),
        /**
         * Static representation of the {@link col} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COL: fieldBuilder.buildEdmTypeField('Col', 'Edm.Int32', false),
        /**
         * Static representation of the {@link colSpan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COL_SPAN: fieldBuilder.buildEdmTypeField('ColSpan', 'Edm.Int32', false),
        /**
         * Static representation of the {@link displayText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TEXT: fieldBuilder.buildEdmTypeField(
          'DisplayText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fontSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_SIZE: fieldBuilder.buildEdmTypeField(
          'FontSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link rowNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_NUM: fieldBuilder.buildEdmTypeField('RowNum', 'Edm.Int32', false),
        /**
         * Static representation of the {@link rowSpan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_SPAN: fieldBuilder.buildEdmTypeField('RowSpan', 'Edm.Int32', false),
        /**
         * Static representation of the {@link pictureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_ID: fieldBuilder.buildEdmTypeField(
          'PictureId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link notificationContentAlignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_CONTENT_ALIGNMENT: fieldBuilder.buildEnumField(
          'NotificationContentAlignment',
          RetailButtonItemContentAlignmentEnum,
          true
        ),
        /**
         * Static representation of the {@link actionProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ActionProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fontColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_COLOR: fieldBuilder.buildEdmTypeField(
          'FontColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link gradientMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRADIENT_MODE: fieldBuilder.buildEnumField(
          'GradientMode',
          RetailGradientMode,
          true
        ),
        /**
         * Static representation of the {@link colour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOUR: fieldBuilder.buildEnumField(
          'colour',
          RetailButtonColorBase,
          true
        ),
        /**
         * Static representation of the {@link newTextAlignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_TEXT_ALIGNMENT: fieldBuilder.buildEnumField(
          'NewTextAlignment',
          RetailButtonItemContentAlignmentEnum,
          true
        ),
        /**
         * Static representation of the {@link enableCustomFontForPos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CUSTOM_FONT_FOR_POS: fieldBuilder.buildEnumField(
          'EnableCustomFontForPOS',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hideButtonText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_BUTTON_TEXT: fieldBuilder.buildEnumField(
          'HideButtonText',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link picture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE: fieldBuilder.buildEdmTypeField('picture', 'Edm.Binary', true),
        /**
         * Static representation of the {@link backColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACK_COLOR: fieldBuilder.buildEdmTypeField(
          'BackColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tooltip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOOLTIP: fieldBuilder.buildEdmTypeField('Tooltip', 'Edm.String', true),
        /**
         * Static representation of the {@link useCustomLookAndFeel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CUSTOM_LOOK_AND_FEEL: fieldBuilder.buildEnumField(
          'UseCustomLookAndFeel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link backColor2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACK_COLOR_2: fieldBuilder.buildEdmTypeField(
          'BackColor2',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link imageAlignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE_ALIGNMENT: fieldBuilder.buildEnumField(
          'imageAlignment',
          RetailImageAlignmentTypeBase,
          true
        ),
        /**
         * Static representation of the {@link enableLiveContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LIVE_CONTENT: fieldBuilder.buildEnumField(
          'EnableLiveContent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link borderColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BORDER_COLOR: fieldBuilder.buildEdmTypeField(
          'BorderColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link newImageAlignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_IMAGE_ALIGNMENT: fieldBuilder.buildEnumField(
          'NewImageAlignment',
          RetailButtonItemContentAlignmentEnum,
          true
        ),
        /**
         * Static representation of the {@link fontStyle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_STYLE: fieldBuilder.buildEnumField(
          'FontStyle',
          RetailFontStyleBase,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailButtonGridButtonsImages)
      };
    }

    return this._schema;
  }
}
