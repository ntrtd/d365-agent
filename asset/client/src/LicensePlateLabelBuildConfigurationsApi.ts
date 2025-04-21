/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LicensePlateLabelBuildConfigurations } from './LicensePlateLabelBuildConfigurations';
import { LicensePlateLabelBuildConfigurationsRequestBuilder } from './LicensePlateLabelBuildConfigurationsRequestBuilder';
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
export class LicensePlateLabelBuildConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LicensePlateLabelBuildConfigurations<DeSerializersT>,
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
  ): LicensePlateLabelBuildConfigurationsApi<DeSerializersT> {
    return new LicensePlateLabelBuildConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LicensePlateLabelBuildConfigurations;

  requestBuilder(): LicensePlateLabelBuildConfigurationsRequestBuilder<DeSerializersT> {
    return new LicensePlateLabelBuildConfigurationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LicensePlateLabelBuildConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LicensePlateLabelBuildConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LicensePlateLabelBuildConfigurations<DeSerializersT>,
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
    typeof LicensePlateLabelBuildConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LicensePlateLabelBuildConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LicensePlateLabelBuildConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_LABEL_BUILD_CONFIGURATION_ID: OrderableEdmTypeField<
      LicensePlateLabelBuildConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONFIGURATION_DESCRIPTION: OrderableEdmTypeField<
      LicensePlateLabelBuildConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LicensePlateLabelBuildConfigurations<DeSerializers>>;
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
         * Static representation of the {@link configurationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ConfigurationDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LicensePlateLabelBuildConfigurations)
      };
    }

    return this._schema;
  }
}
