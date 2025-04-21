/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPeriodCodes } from './RetailPeriodCodes';
import { RetailPeriodCodesRequestBuilder } from './RetailPeriodCodesRequestBuilder';
import { LedgerPeriodType } from './LedgerPeriodType';
import { StartEnd } from './StartEnd';
import { PeriodUnitCalc } from './PeriodUnitCalc';
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
export class RetailPeriodCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailPeriodCodes<DeSerializersT>, DeSerializersT>
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
  ): RetailPeriodCodesApi<DeSerializersT> {
    return new RetailPeriodCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailPeriodCodes;

  requestBuilder(): RetailPeriodCodesRequestBuilder<DeSerializersT> {
    return new RetailPeriodCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPeriodCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailPeriodCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailPeriodCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailPeriodCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailPeriodCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TXT: OrderableEdmTypeField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_PERIOD_2: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    START_PERIOD_1: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    END_FUNCTION_2: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    END_UNIT: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      PeriodUnitCalc,
      true,
      true
    >;
    START_FIXED_DATE: OrderableEdmTypeField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_CHANGE: OrderableEdmTypeField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_FUNCTION_2: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    END_FIXED_DATE: OrderableEdmTypeField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_PERIOD_2: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    END_PERIOD_1: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      LedgerPeriodType,
      true,
      true
    >;
    START_UNIT: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      PeriodUnitCalc,
      true,
      true
    >;
    END_FUNCTION_1: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    END_CHANGE: OrderableEdmTypeField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_FUNCTION_1: EnumField<
      RetailPeriodCodes<DeSerializers>,
      DeSerializersT,
      StartEnd,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailPeriodCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link startPeriod2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_PERIOD_2: fieldBuilder.buildEnumField(
          'StartPeriod2',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link startPeriod1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_PERIOD_1: fieldBuilder.buildEnumField(
          'StartPeriod1',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link endFunction2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_FUNCTION_2: fieldBuilder.buildEnumField(
          'EndFunction2',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link endUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_UNIT: fieldBuilder.buildEnumField('EndUnit', PeriodUnitCalc, true),
        /**
         * Static representation of the {@link startFixedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FIXED_DATE: fieldBuilder.buildEdmTypeField(
          'StartFixedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_CHANGE: fieldBuilder.buildEdmTypeField(
          'StartChange',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startFunction2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FUNCTION_2: fieldBuilder.buildEnumField(
          'StartFunction2',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link endFixedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_FIXED_DATE: fieldBuilder.buildEdmTypeField(
          'EndFixedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endPeriod2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_PERIOD_2: fieldBuilder.buildEnumField(
          'EndPeriod2',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link endPeriod1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_PERIOD_1: fieldBuilder.buildEnumField(
          'EndPeriod1',
          LedgerPeriodType,
          true
        ),
        /**
         * Static representation of the {@link startUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_UNIT: fieldBuilder.buildEnumField(
          'StartUnit',
          PeriodUnitCalc,
          true
        ),
        /**
         * Static representation of the {@link endFunction1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_FUNCTION_1: fieldBuilder.buildEnumField(
          'EndFunction1',
          StartEnd,
          true
        ),
        /**
         * Static representation of the {@link endChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_CHANGE: fieldBuilder.buildEdmTypeField(
          'EndChange',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startFunction1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FUNCTION_1: fieldBuilder.buildEnumField(
          'StartFunction1',
          StartEnd,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPeriodCodes)
      };
    }

    return this._schema;
  }
}
