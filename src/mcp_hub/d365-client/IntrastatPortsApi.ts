/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatPorts } from './IntrastatPorts';
import { IntrastatPortsRequestBuilder } from './IntrastatPortsRequestBuilder';
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
export class IntrastatPortsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IntrastatPorts<DeSerializersT>, DeSerializersT>
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
  ): IntrastatPortsApi<DeSerializersT> {
    return new IntrastatPortsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatPorts;

  requestBuilder(): IntrastatPortsRequestBuilder<DeSerializersT> {
    return new IntrastatPortsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntrastatPorts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IntrastatPorts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IntrastatPorts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IntrastatPorts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(IntrastatPorts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntrastatPorts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PORT_ID: OrderableEdmTypeField<
      IntrastatPorts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      IntrastatPorts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIBE_PORT: OrderableEdmTypeField<
      IntrastatPorts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT_STATE: OrderableEdmTypeField<
      IntrastatPorts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatPorts<DeSerializers>>;
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
         * Static representation of the {@link portId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT_ID: fieldBuilder.buildEdmTypeField('PortId', 'Edm.String', false),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link describePort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIBE_PORT: fieldBuilder.buildEdmTypeField(
          'DescribePort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT_STATE: fieldBuilder.buildEdmTypeField(
          'PortState',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatPorts)
      };
    }

    return this._schema;
  }
}
