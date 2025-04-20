/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalWarehouseSourceSystemRelations } from './ExternalWarehouseSourceSystemRelations';
import { ExternalWarehouseSourceSystemRelationsRequestBuilder } from './ExternalWarehouseSourceSystemRelationsRequestBuilder';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { ExternalWarehouseManagementSystemsApi } from './ExternalWarehouseManagementSystemsApi';
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
export class ExternalWarehouseSourceSystemRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExternalWarehouseSourceSystemRelations<DeSerializersT>,
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
  ): ExternalWarehouseSourceSystemRelationsApi<DeSerializersT> {
    return new ExternalWarehouseSourceSystemRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      ExternalWarehouseSourceSystemRelations<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externalWarehouseManagementSytem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYTEM: OneToOneLink<
      ExternalWarehouseSourceSystemRelations<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseManagementSystemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>,
      ExternalWarehouseManagementSystemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[0]),
      EXTERNAL_WAREHOUSE_MANAGEMENT_SYTEM: new OneToOneLink(
        'ExternalWarehouseManagementSytem',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ExternalWarehouseSourceSystemRelations;

  requestBuilder(): ExternalWarehouseSourceSystemRelationsRequestBuilder<DeSerializersT> {
    return new ExternalWarehouseSourceSystemRelationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExternalWarehouseSourceSystemRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalWarehouseSourceSystemRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalWarehouseSourceSystemRelations<DeSerializersT>,
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
    typeof ExternalWarehouseSourceSystemRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalWarehouseSourceSystemRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      ExternalWarehouseSourceSystemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ExternalWarehouseSourceSystemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_DOCUMENTS_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ExternalWarehouseSourceSystemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: OrderableEdmTypeField<
      ExternalWarehouseSourceSystemRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      ExternalWarehouseSourceSystemRelations<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externalWarehouseManagementSytem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYTEM: OneToOneLink<
      ExternalWarehouseSourceSystemRelations<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseManagementSystemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ExternalWarehouseSourceSystemRelations<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceDocumentsLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENTS_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'SourceDocumentsLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalWarehouseManagementSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseManagementSystemId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalWarehouseSourceSystemRelations)
      };
    }

    return this._schema;
  }
}
