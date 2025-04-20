/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentDayLinesCds } from './PaymentDayLinesCds';
import { PaymentDayLinesCdsRequestBuilder } from './PaymentDayLinesCdsRequestBuilder';
import { PaymentDaysCdsApi } from './PaymentDaysCdsApi';
import { WeekDays } from './WeekDays';
import { WeekMonth } from './WeekMonth';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PaymentDayLinesCdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentDayLinesCds<DeSerializersT>, DeSerializersT>
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
  ): PaymentDayLinesCdsApi<DeSerializersT> {
    return new PaymentDayLinesCdsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link paymentDayLinePaymentDayEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DAY_LINE_PAYMENT_DAY_ENTITY_ROLE: OneToOneLink<
      PaymentDayLinesCds<DeSerializersT>,
      DeSerializersT,
      PaymentDaysCdsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PaymentDaysCdsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAYMENT_DAY_LINE_PAYMENT_DAY_ENTITY_ROLE: new OneToOneLink(
        'PaymentDayLinePaymentDayEntityRole',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PaymentDayLinesCds;

  requestBuilder(): PaymentDayLinesCdsRequestBuilder<DeSerializersT> {
    return new PaymentDayLinesCdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentDayLinesCds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentDayLinesCds<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymentDayLinesCds<DeSerializersT>,
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
    typeof PaymentDayLinesCds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentDayLinesCds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentDayLinesCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CDS_INTEGRATION_KEY: OrderableEdmTypeField<
      PaymentDayLinesCds<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymentDayLinesCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAY_OF_MONTH: OrderableEdmTypeField<
      PaymentDayLinesCds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DAY_OF_WEEK: EnumField<
      PaymentDayLinesCds<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    FREQUENCY: EnumField<
      PaymentDayLinesCds<DeSerializers>,
      DeSerializersT,
      WeekMonth,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentDayLinePaymentDayEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DAY_LINE_PAYMENT_DAY_ENTITY_ROLE: OneToOneLink<
      PaymentDayLinesCds<DeSerializersT>,
      DeSerializersT,
      PaymentDaysCdsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentDayLinesCds<DeSerializers>>;
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
         * Static representation of the {@link cdsIntegrationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CDS_INTEGRATION_KEY: fieldBuilder.buildEdmTypeField(
          'CdsIntegrationKey',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link dayOfMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_OF_MONTH: fieldBuilder.buildEdmTypeField(
          'DayOfMonth',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dayOfWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_OF_WEEK: fieldBuilder.buildEnumField('DayOfWeek', WeekDays, true),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField('Frequency', WeekMonth, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentDayLinesCds)
      };
    }

    return this._schema;
  }
}
