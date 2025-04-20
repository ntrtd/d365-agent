/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxRegistrationNumbers } from './SalesTaxRegistrationNumbers';
import { SalesTaxRegistrationNumbersRequestBuilder } from './SalesTaxRegistrationNumbersRequestBuilder';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';
import { PeriodUnit } from './PeriodUnit';
import { SalesReturnAlertIn } from './SalesReturnAlertIn';
import { CustomerCalculationDateTypeIn } from './CustomerCalculationDateTypeIn';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SalesTaxRegistrationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesTaxRegistrationNumbers<DeSerializersT>, DeSerializersT>
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
  ): SalesTaxRegistrationNumbersApi<DeSerializersT> {
    return new SalesTaxRegistrationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesTaxRegistrationNumbers;

  requestBuilder(): SalesTaxRegistrationNumbersRequestBuilder<DeSerializersT> {
    return new SalesTaxRegistrationNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTaxRegistrationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesTaxRegistrationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTaxRegistrationNumbers<DeSerializersT>,
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
    typeof SalesTaxRegistrationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTaxRegistrationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_NUMBER_TYPE: EnumField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED: EnumField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT: EnumField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    RETURN_ALERT: EnumField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      SalesReturnAlertIn,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DURATION: OrderableEdmTypeField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETURN_UNIT: EnumField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    RETURN_BASIS: EnumField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      CustomerCalculationDateTypeIn,
      true,
      true
    >;
    SALES_DURATION: OrderableEdmTypeField<
      SalesTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SalesTaxRegistrationNumbers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link registrationNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'RegistrationNumberType',
          TaxRegistrationTypeIn,
          true
        ),
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED: fieldBuilder.buildEnumField('Shared', NoYes, true),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEnumField('SalesUnit', PeriodUnit, true),
        /**
         * Static representation of the {@link returnAlert} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ALERT: fieldBuilder.buildEnumField(
          'ReturnAlert',
          SalesReturnAlertIn,
          true
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
        /**
         * Static representation of the {@link returnDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DURATION: fieldBuilder.buildEdmTypeField(
          'ReturnDuration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link returnUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_UNIT: fieldBuilder.buildEnumField(
          'ReturnUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link returnBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_BASIS: fieldBuilder.buildEnumField(
          'ReturnBasis',
          CustomerCalculationDateTypeIn,
          true
        ),
        /**
         * Static representation of the {@link salesDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DURATION: fieldBuilder.buildEdmTypeField(
          'SalesDuration',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTaxRegistrationNumbers)
      };
    }

    return this._schema;
  }
}
