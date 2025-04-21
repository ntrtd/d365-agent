/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillSupportRenewalLevelsTables } from './SubBillSupportRenewalLevelsTables';
import { SubBillSupportRenewalLevelsTablesRequestBuilder } from './SubBillSupportRenewalLevelsTablesRequestBuilder';
import { SubBillRenewalCalculationMethod } from './SubBillRenewalCalculationMethod';
import { SubBillSupportCalculationMethod } from './SubBillSupportCalculationMethod';
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
export class SubBillSupportRenewalLevelsTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillSupportRenewalLevelsTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillSupportRenewalLevelsTablesApi<DeSerializersT> {
    return new SubBillSupportRenewalLevelsTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillSupportRenewalLevelsTables;

  requestBuilder(): SubBillSupportRenewalLevelsTablesRequestBuilder<DeSerializersT> {
    return new SubBillSupportRenewalLevelsTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillSupportRenewalLevelsTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillSupportRenewalLevelsTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillSupportRenewalLevelsTables<DeSerializersT>,
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
    typeof SubBillSupportRenewalLevelsTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillSupportRenewalLevelsTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPORT_LEVEL: OrderableEdmTypeField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RENEWAL_PERCENTAGE: OrderableEdmTypeField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RENEWAL_CALCULATION_METHOD: EnumField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      SubBillRenewalCalculationMethod,
      true,
      true
    >;
    SUPPORT_PERCENTAGE: OrderableEdmTypeField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_CALCULATION_METHOD: EnumField<
      SubBillSupportRenewalLevelsTables<DeSerializers>,
      DeSerializersT,
      SubBillSupportCalculationMethod,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillSupportRenewalLevelsTables<DeSerializers>>;
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
         * Static representation of the {@link supportLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_LEVEL: fieldBuilder.buildEdmTypeField(
          'SupportLevel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link renewalPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RenewalPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link renewalCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RenewalCalculationMethod',
          SubBillRenewalCalculationMethod,
          true
        ),
        /**
         * Static representation of the {@link supportPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SupportPercentage',
          'Edm.Decimal',
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
        /**
         * Static representation of the {@link supportCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'SupportCalculationMethod',
          SubBillSupportCalculationMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillSupportRenewalLevelsTables)
      };
    }

    return this._schema;
  }
}
