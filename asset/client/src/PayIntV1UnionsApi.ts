/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1Unions } from './PayIntV1Unions';
import { PayIntV1UnionsRequestBuilder } from './PayIntV1UnionsRequestBuilder';
import { NoYes } from './NoYes';
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
export class PayIntV1UnionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1Unions<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1UnionsApi<DeSerializersT> {
    return new PayIntV1UnionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1Unions;

  requestBuilder(): PayIntV1UnionsRequestBuilder<DeSerializersT> {
    return new PayIntV1UnionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1Unions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1Unions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayIntV1Unions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayIntV1Unions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PayIntV1Unions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNION_ID: OrderableEdmTypeField<
      PayIntV1Unions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PayIntV1Unions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITLED_TO_NEGOTIATE: EnumField<
      PayIntV1Unions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1Unions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link unionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_ID: fieldBuilder.buildEdmTypeField(
          'UnionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link entitledToNegotiate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITLED_TO_NEGOTIATE: fieldBuilder.buildEnumField(
          'EntitledToNegotiate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1Unions)
      };
    }

    return this._schema;
  }
}
