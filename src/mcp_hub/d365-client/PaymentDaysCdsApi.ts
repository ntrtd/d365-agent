/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentDaysCds } from './PaymentDaysCds';
import { PaymentDaysCdsRequestBuilder } from './PaymentDaysCdsRequestBuilder';
import { PaymentDayLinesCdsApi } from './PaymentDayLinesCdsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PaymentDaysCdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentDaysCds<DeSerializersT>, DeSerializersT>
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
  ): PaymentDaysCdsApi<DeSerializersT> {
    return new PaymentDaysCdsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link paymentDayLinePaymentDayEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DAY_LINE_PAYMENT_DAY_ENTITY: OneToManyLink<
      PaymentDaysCds<DeSerializersT>,
      DeSerializersT,
      PaymentDayLinesCdsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PaymentDayLinesCdsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAYMENT_DAY_LINE_PAYMENT_DAY_ENTITY: new OneToManyLink(
        'PaymentDayLinePaymentDayEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PaymentDaysCds;

  requestBuilder(): PaymentDaysCdsRequestBuilder<DeSerializersT> {
    return new PaymentDaysCdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentDaysCds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentDaysCds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentDaysCds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentDaysCds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PaymentDaysCds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentDaysCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymentDaysCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymentDaysCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDayLinePaymentDayEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DAY_LINE_PAYMENT_DAY_ENTITY: OneToManyLink<
      PaymentDaysCds<DeSerializersT>,
      DeSerializersT,
      PaymentDayLinesCdsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentDaysCds<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentDaysCds)
      };
    }

    return this._schema;
  }
}
