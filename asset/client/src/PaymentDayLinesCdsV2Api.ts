/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentDayLinesCdsV2 } from './PaymentDayLinesCdsV2';
import { PaymentDayLinesCdsV2RequestBuilder } from './PaymentDayLinesCdsV2RequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PaymentDayLinesCdsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentDayLinesCdsV2<DeSerializersT>, DeSerializersT>
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
  ): PaymentDayLinesCdsV2Api<DeSerializersT> {
    return new PaymentDayLinesCdsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PaymentDayLinesCdsV2;

  requestBuilder(): PaymentDayLinesCdsV2RequestBuilder<DeSerializersT> {
    return new PaymentDayLinesCdsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentDayLinesCdsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentDayLinesCdsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymentDayLinesCdsV2<DeSerializersT>,
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
    typeof PaymentDayLinesCdsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentDayLinesCdsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentDayLinesCdsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymentDayLinesCdsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PaymentDayLinesCdsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DAY_OF_MONTH: OrderableEdmTypeField<
      PaymentDayLinesCdsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DAY_OF_WEEK: EnumField<
      PaymentDayLinesCdsV2<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    FREQUENCY: EnumField<
      PaymentDayLinesCdsV2<DeSerializers>,
      DeSerializersT,
      WeekMonth,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PaymentDayLinesCdsV2<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', PaymentDayLinesCdsV2)
      };
    }

    return this._schema;
  }
}
