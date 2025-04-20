/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailVisualProfiles } from './RetailVisualProfiles';
import { RetailVisualProfilesRequestBuilder } from './RetailVisualProfilesRequestBuilder';
import { RetailTerminalsApi } from './RetailTerminalsApi';
import { NoYes } from './NoYes';
import { DefaultSearchResultDisplayView } from './DefaultSearchResultDisplayView';
import { RetailFontScheme } from './RetailFontScheme';
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
  EdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailVisualProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailVisualProfiles<DeSerializersT>, DeSerializersT>
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
  ): RetailVisualProfilesApi<DeSerializersT> {
    return new RetailVisualProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTerminal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TERMINAL: OneToManyLink<
      RetailVisualProfiles<DeSerializersT>,
      DeSerializersT,
      RetailTerminalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTerminalsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TERMINAL: new OneToManyLink('RetailTerminal', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailVisualProfiles;

  requestBuilder(): RetailVisualProfilesRequestBuilder<DeSerializersT> {
    return new RetailVisualProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailVisualProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailVisualProfiles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailVisualProfiles<DeSerializersT>,
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
    typeof RetailVisualProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailVisualProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_ID: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHOW_APPLICATION_BAR_LABEL: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PICTURE_ID_PORTRAIT: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCREEN_HEIGHT: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHOW_DATE_TIME: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIN_FILE: EdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PALLET: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOW_PRODUCT_CONFIGURATION_ID: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_SEARCH_RESULT_DISPLAY_VIEW: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      DefaultSearchResultDisplayView,
      true,
      true
    >;
    BACKGROUND_PICTURE_ID: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POS_SKIN_NAME: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESIGN_ALLOWED_ON_POS: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_BYPASS_ITEM_ADDED_DIALOG: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_DEVICE_TYPE_ID: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PICTURE_ID: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HIDE_CURSOR: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCREEN_WIDTH: OrderableEdmTypeField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FULL_SCREEN_MODE: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FONT_SCHEME: EnumField<
      RetailVisualProfiles<DeSerializers>,
      DeSerializersT,
      RetailFontScheme,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTerminal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TERMINAL: OneToManyLink<
      RetailVisualProfiles<DeSerializersT>,
      DeSerializersT,
      RetailTerminalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailVisualProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link showApplicationBarLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_APPLICATION_BAR_LABEL: fieldBuilder.buildEnumField(
          'ShowApplicationBarLabel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pictureIdPortrait} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_ID_PORTRAIT: fieldBuilder.buildEdmTypeField(
          'PictureIdPortrait',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link screenHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCREEN_HEIGHT: fieldBuilder.buildEdmTypeField(
          'ScreenHeight',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link showDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_DATE_TIME: fieldBuilder.buildEnumField(
          'ShowDateTime',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skinFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIN_FILE: fieldBuilder.buildEdmTypeField(
          'SkinFile',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link pallet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PALLET: fieldBuilder.buildEdmTypeField('Pallet', 'Edm.String', true),
        /**
         * Static representation of the {@link showProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEnumField(
          'ShowProductConfigurationId',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultSearchResultDisplayView} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SEARCH_RESULT_DISPLAY_VIEW: fieldBuilder.buildEnumField(
          'DefaultSearchResultDisplayView',
          DefaultSearchResultDisplayView,
          true
        ),
        /**
         * Static representation of the {@link backgroundPictureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKGROUND_PICTURE_ID: fieldBuilder.buildEdmTypeField(
          'BackgroundPictureId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link posSkinName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_SKIN_NAME: fieldBuilder.buildEdmTypeField(
          'POSSkinName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link designAllowedOnPos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIGN_ALLOWED_ON_POS: fieldBuilder.buildEnumField(
          'DesignAllowedOnPos',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailBypassItemAddedDialog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_BYPASS_ITEM_ADDED_DIALOG: fieldBuilder.buildEnumField(
          'RetailBypassItemAddedDialog',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailDeviceTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DEVICE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RetailDeviceTypeId',
          'Edm.Int32',
          false
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
         * Static representation of the {@link hideCursor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_CURSOR: fieldBuilder.buildEnumField('HideCursor', NoYes, true),
        /**
         * Static representation of the {@link screenWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCREEN_WIDTH: fieldBuilder.buildEdmTypeField(
          'ScreenWidth',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fullScreenMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_SCREEN_MODE: fieldBuilder.buildEnumField(
          'FullScreenMode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fontScheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_SCHEME: fieldBuilder.buildEnumField(
          'FontScheme',
          RetailFontScheme,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailVisualProfiles)
      };
    }

    return this._schema;
  }
}
