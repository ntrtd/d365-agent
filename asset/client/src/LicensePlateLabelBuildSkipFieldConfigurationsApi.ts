/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LicensePlateLabelBuildSkipFieldConfigurations } from './LicensePlateLabelBuildSkipFieldConfigurations';
import { LicensePlateLabelBuildSkipFieldConfigurationsRequestBuilder } from './LicensePlateLabelBuildSkipFieldConfigurationsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LicensePlateLabelBuildSkipFieldConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LicensePlateLabelBuildSkipFieldConfigurations<DeSerializersT>,
      DeSerializersT
    >
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
  ): LicensePlateLabelBuildSkipFieldConfigurationsApi<DeSerializersT> {
    return new LicensePlateLabelBuildSkipFieldConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LicensePlateLabelBuildSkipFieldConfigurations;

  requestBuilder(): LicensePlateLabelBuildSkipFieldConfigurationsRequestBuilder<DeSerializersT> {
    return new LicensePlateLabelBuildSkipFieldConfigurationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LicensePlateLabelBuildSkipFieldConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LicensePlateLabelBuildSkipFieldConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LicensePlateLabelBuildSkipFieldConfigurations<DeSerializersT>,
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
    typeof LicensePlateLabelBuildSkipFieldConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LicensePlateLabelBuildSkipFieldConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LicensePlateLabelBuildSkipFieldConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_LABEL_BUILD_CONFIGURATION_ID: OrderableEdmTypeField<
      LicensePlateLabelBuildSkipFieldConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKIP_FIELD_NAME: OrderableEdmTypeField<
      LicensePlateLabelBuildSkipFieldConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      LicensePlateLabelBuildSkipFieldConfigurations<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link licensePlateLabelBuildConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_LABEL_BUILD_CONFIGURATION_ID:
          fieldBuilder.buildEdmTypeField(
            'LicensePlateLabelBuildConfigurationId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link skipFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'SkipFieldName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          LicensePlateLabelBuildSkipFieldConfigurations
        )
      };
    }

    return this._schema;
  }
}
