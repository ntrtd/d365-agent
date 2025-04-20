/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomOffices } from './CustomOffices';
import { CustomOfficesRequestBuilder } from './CustomOfficesRequestBuilder';
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
export class CustomOfficesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomOffices<DeSerializersT>, DeSerializersT>
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
  ): CustomOfficesApi<DeSerializersT> {
    return new CustomOfficesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomOffices;

  requestBuilder(): CustomOfficesRequestBuilder<DeSerializersT> {
    return new CustomOfficesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomOffices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomOffices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomOffices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomOffices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustomOffices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomOffices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGENT_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomOffices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFICE_CODE: OrderableEdmTypeField<
      CustomOffices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustomOffices<DeSerializers>>;
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
         * Static representation of the {@link agentAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgentAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link officeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICE_CODE: fieldBuilder.buildEdmTypeField(
          'OfficeCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomOffices)
      };
    }

    return this._schema;
  }
}
