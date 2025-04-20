/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailButtonGridButtons } from './RetailButtonGridButtons';
import { RetailButtonGridButtonsRequestBuilder } from './RetailButtonGridButtonsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailButtonGridButtonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailButtonGridButtons<DeSerializersT>, DeSerializersT>
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
  ): RetailButtonGridButtonsApi<DeSerializersT> {
    return new RetailButtonGridButtonsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailButtonGridButtons;

  requestBuilder(): RetailButtonGridButtonsRequestBuilder<DeSerializersT> {
    return new RetailButtonGridButtonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailButtonGridButtons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailButtonGridButtons<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailButtonGridButtons<DeSerializersT>,
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
    typeof RetailButtonGridButtons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailButtonGridButtons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BUTTON_GRID_ID: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION_PROPERTY: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTIFICATION_CONTENT_ALIGNMENT: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailButtonItemContentAlignmentEnum,
      true,
      true
    >;
    FONT_COLOR: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GRADIENT_MODE: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailGradientMode,
      true,
      true
    >;
    COLOUR: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailButtonColorBase,
      true,
      true
    >;
    NEW_TEXT_ALIGNMENT: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailButtonItemContentAlignmentEnum,
      true,
      true
    >;
    PICTURE_ID: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_CUSTOM_FONT_FOR_POS: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FONT_SIZE: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COL_SPAN: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HIDE_BUTTON_TEXT: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROW_NUM: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACK_COLOR: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOOLTIP: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROW_SPAN: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_CUSTOM_LOOK_AND_FEEL: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BACK_COLOR_2: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IMAGE_ALIGNMENT: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailImageAlignmentTypeBase,
      true,
      true
    >;
    DISPLAY_TEXT: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COL: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BORDER_COLOR: OrderableEdmTypeField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_LIVE_CONTENT: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEW_IMAGE_ALIGNMENT: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailButtonItemContentAlignmentEnum,
      true,
      true
    >;
    FONT_STYLE: EnumField<
      RetailButtonGridButtons<DeSerializers>,
      DeSerializersT,
      RetailFontStyleBase,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailButtonGridButtons<DeSerializers>>;
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
         * Static representation of the {@link actionProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ActionProperty',
          'Edm.String',
          true
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
         * Static representation of the {@link pictureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_ID: fieldBuilder.buildEdmTypeField(
          'PictureId',
          'Edm.Int32',
          false
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
         * Static representation of the {@link fontSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_SIZE: fieldBuilder.buildEdmTypeField(
          'FontSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link colSpan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COL_SPAN: fieldBuilder.buildEdmTypeField('ColSpan', 'Edm.Int32', false),
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
         * Static representation of the {@link rowNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_NUM: fieldBuilder.buildEdmTypeField('RowNum', 'Edm.Int32', false),
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
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.Int32', false),
        /**
         * Static representation of the {@link tooltip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOOLTIP: fieldBuilder.buildEdmTypeField('Tooltip', 'Edm.String', true),
        /**
         * Static representation of the {@link rowSpan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_SPAN: fieldBuilder.buildEdmTypeField('RowSpan', 'Edm.Int32', false),
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
         * Static representation of the {@link displayText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TEXT: fieldBuilder.buildEdmTypeField(
          'DisplayText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link col} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COL: fieldBuilder.buildEdmTypeField('Col', 'Edm.Int32', false),
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
         * Static representation of the {@link enableLiveContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LIVE_CONTENT: fieldBuilder.buildEnumField(
          'EnableLiveContent',
          NoYes,
          true
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
        ALL_FIELDS: new AllFields('*', RetailButtonGridButtons)
      };
    }

    return this._schema;
  }
}
