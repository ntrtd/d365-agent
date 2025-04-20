/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorSystemInstanceAXes } from './CostAccountingDataConnectorSystemInstanceAXes';
import { CostAccountingDataConnectorSystemInstanceAXesRequestBuilder } from './CostAccountingDataConnectorSystemInstanceAXesRequestBuilder';
import { CostAccountingDataConnectorSystemInstancesApi } from './CostAccountingDataConnectorSystemInstancesApi';
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
export class CostAccountingDataConnectorSystemInstanceAXesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializersT>,
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
  ): CostAccountingDataConnectorSystemInstanceAXesApi<DeSerializersT> {
    return new CostAccountingDataConnectorSystemInstanceAXesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dataConnectorSystemInstanceEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_SYSTEM_INSTANCE_ENTITY: OneToOneLink<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorSystemInstancesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CostAccountingDataConnectorSystemInstancesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DATA_CONNECTOR_SYSTEM_INSTANCE_ENTITY: new OneToOneLink(
        'DataConnectorSystemInstanceEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CostAccountingDataConnectorSystemInstanceAXes;

  requestBuilder(): CostAccountingDataConnectorSystemInstanceAXesRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorSystemInstanceAXesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorSystemInstanceAXes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorSystemInstanceAXes<DeSerializersT>,
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
    typeof CostAccountingDataConnectorSystemInstanceAXes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorSystemInstanceAXes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dataConnectorSystemInstanceEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_SYSTEM_INSTANCE_ENTITY: OneToOneLink<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorSystemInstancesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorSystemInstanceAXes<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link surrogateKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURROGATE_KEY: fieldBuilder.buildEdmTypeField(
          'SurrogateKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostAccountingDataConnectorSystemInstanceAXes
        )
      };
    }

    return this._schema;
  }
}
