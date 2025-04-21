/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DebtPeriods } from './DebtPeriods';
import { DebtPeriodsRequestBuilder } from './DebtPeriodsRequestBuilder';
import { RTax25DebtType } from './RTax25DebtType';
import { RTax25BadDebtType } from './RTax25BadDebtType';
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
export class DebtPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DebtPeriods<DeSerializersT>, DeSerializersT>
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
  ): DebtPeriodsApi<DeSerializersT> {
    return new DebtPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DebtPeriods;

  requestBuilder(): DebtPeriodsRequestBuilder<DeSerializersT> {
    return new DebtPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DebtPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DebtPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DebtPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DebtPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DebtPeriods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEBT_TYPE: EnumField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      RTax25DebtType,
      true,
      true
    >;
    PERIOD_DEBT_TYPE: EnumField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      RTax25BadDebtType,
      true,
      true
    >;
    FROM: OrderableEdmTypeField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_FIELD: OrderableEdmTypeField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BY: OrderableEdmTypeField<
      DebtPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DebtPeriods<DeSerializers>>;
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
         * Static representation of the {@link debtType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBT_TYPE: fieldBuilder.buildEnumField(
          'DebtType',
          RTax25DebtType,
          true
        ),
        /**
         * Static representation of the {@link periodDebtType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_DEBT_TYPE: fieldBuilder.buildEnumField(
          'PeriodDebtType',
          RTax25BadDebtType,
          true
        ),
        /**
         * Static representation of the {@link from} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM: fieldBuilder.buildEdmTypeField('From', 'Edm.Int32', false),
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
         * Static representation of the {@link registerField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_FIELD: fieldBuilder.buildEdmTypeField(
          'RegisterField',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link by} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY: fieldBuilder.buildEdmTypeField('By', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DebtPeriods)
      };
    }

    return this._schema;
  }
}
