/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsWaitingDays } from './BenefitsWaitingDays';
import { BenefitsWaitingDaysRequestBuilder } from './BenefitsWaitingDaysRequestBuilder';
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
export class BenefitsWaitingDaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsWaitingDays<DeSerializersT>, DeSerializersT>
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
  ): BenefitsWaitingDaysApi<DeSerializersT> {
    return new BenefitsWaitingDaysApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsWaitingDays;

  requestBuilder(): BenefitsWaitingDaysRequestBuilder<DeSerializersT> {
    return new BenefitsWaitingDaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsWaitingDays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsWaitingDays<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsWaitingDays<DeSerializersT>,
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
    typeof BenefitsWaitingDays,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsWaitingDays,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WAITING_DAY: OrderableEdmTypeField<
      BenefitsWaitingDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_IN_MONTH: OrderableEdmTypeField<
      BenefitsWaitingDays<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsWaitingDays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BenefitsWaitingDays<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link waitingDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAITING_DAY: fieldBuilder.buildEdmTypeField(
          'WaitingDay',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dateInMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_IN_MONTH: fieldBuilder.buildEdmTypeField(
          'DateInMonth',
          'Edm.Int32',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', BenefitsWaitingDays)
      };
    }

    return this._schema;
  }
}
