/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostConfigurationPriceListCostingVersions } from './CostConfigurationPriceListCostingVersions';
import { CostConfigurationPriceListCostingVersionsRequestBuilder } from './CostConfigurationPriceListCostingVersionsRequestBuilder';
import { CostingVersionsApi } from './CostingVersionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CostConfigurationPriceListCostingVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostConfigurationPriceListCostingVersions<DeSerializersT>,
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
  ): CostConfigurationPriceListCostingVersionsApi<DeSerializersT> {
    return new CostConfigurationPriceListCostingVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link costingVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COSTING_VERSION: OneToOneLink<
      CostConfigurationPriceListCostingVersions<DeSerializersT>,
      DeSerializersT,
      CostingVersionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CostingVersionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      COSTING_VERSION: new OneToOneLink('CostingVersion', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CostConfigurationPriceListCostingVersions;

  requestBuilder(): CostConfigurationPriceListCostingVersionsRequestBuilder<DeSerializersT> {
    return new CostConfigurationPriceListCostingVersionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostConfigurationPriceListCostingVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostConfigurationPriceListCostingVersions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostConfigurationPriceListCostingVersions<DeSerializersT>,
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
    typeof CostConfigurationPriceListCostingVersions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostConfigurationPriceListCostingVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VERSION_ID: OrderableEdmTypeField<
      CostConfigurationPriceListCostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      CostConfigurationPriceListCostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_CONFIGURATION_PRICE_LIST_NAME: OrderableEdmTypeField<
      CostConfigurationPriceListCostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costingVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COSTING_VERSION: OneToOneLink<
      CostConfigurationPriceListCostingVersions<DeSerializersT>,
      DeSerializersT,
      CostingVersionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CostConfigurationPriceListCostingVersions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link versionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_ID: fieldBuilder.buildEdmTypeField(
          'VersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costConfigurationPriceListName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CONFIGURATION_PRICE_LIST_NAME: fieldBuilder.buildEdmTypeField(
          'CostConfigurationPriceListName',
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
          CostConfigurationPriceListCostingVersions
        )
      };
    }

    return this._schema;
  }
}
