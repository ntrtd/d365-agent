/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Consignees } from './Consignees';
import { ConsigneesRequestBuilder } from './ConsigneesRequestBuilder';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
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
export class ConsigneesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Consignees<DeSerializersT>, DeSerializersT>
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
  ): ConsigneesApi<DeSerializersT> {
    return new ConsigneesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      Consignees<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WarehouseIntegrationSourceSystemsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Consignees;

  requestBuilder(): ConsigneesRequestBuilder<DeSerializersT> {
    return new ConsigneesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Consignees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Consignees<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Consignees<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Consignees, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Consignees, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Consignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Consignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      Consignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Consignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_GROUP_ID: OrderableEdmTypeField<
      Consignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      Consignees<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      Consignees<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Consignees<DeSerializers>>;
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
         * Static representation of the {@link internalAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternalAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link consigneeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ConsigneeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Consignees)
      };
    }

    return this._schema;
  }
}
