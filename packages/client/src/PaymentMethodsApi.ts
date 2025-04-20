/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentMethods } from './PaymentMethods';
import { PaymentMethodsRequestBuilder } from './PaymentMethodsRequestBuilder';
import { TrvCostOwner } from './TrvCostOwner';
import { NoYes } from './NoYes';
import { TrvPostMethod } from './TrvPostMethod';
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
export class PaymentMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentMethods<DeSerializersT>, DeSerializersT>
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
  ): PaymentMethodsApi<DeSerializersT> {
    return new PaymentMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PaymentMethods;

  requestBuilder(): PaymentMethodsRequestBuilder<DeSerializersT> {
    return new PaymentMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentMethods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentMethods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentMethods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PaymentMethods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_METHOD: OrderableEdmTypeField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYED_BY_TXT: OrderableEdmTypeField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OWNER: EnumField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      TrvCostOwner,
      true,
      true
    >;
    AUTOMATIC_PAYMENT: EnumField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_METHOD: EnumField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      TrvPostMethod,
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PaymentMethods<DeSerializers>>;
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
         * Static representation of the {@link payMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_METHOD: fieldBuilder.buildEdmTypeField(
          'PayMethod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link payedByTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYED_BY_TXT: fieldBuilder.buildEdmTypeField(
          'PayedByTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OWNER: fieldBuilder.buildEnumField(
          'CostOwner',
          TrvCostOwner,
          true
        ),
        /**
         * Static representation of the {@link automaticPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_PAYMENT: fieldBuilder.buildEnumField(
          'AutomaticPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_METHOD: fieldBuilder.buildEnumField(
          'PostMethod',
          TrvPostMethod,
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentMethods)
      };
    }

    return this._schema;
  }
}
