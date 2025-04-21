/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FundingLimitSpentAmountValidationHistories } from './FundingLimitSpentAmountValidationHistories';
import { FundingLimitSpentAmountValidationHistoriesRequestBuilder } from './FundingLimitSpentAmountValidationHistoriesRequestBuilder';
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
export class FundingLimitSpentAmountValidationHistoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FundingLimitSpentAmountValidationHistories<DeSerializersT>,
      DeSerializersT
    >
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
  ): FundingLimitSpentAmountValidationHistoriesApi<DeSerializersT> {
    return new FundingLimitSpentAmountValidationHistoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FundingLimitSpentAmountValidationHistories;

  requestBuilder(): FundingLimitSpentAmountValidationHistoriesRequestBuilder<DeSerializersT> {
    return new FundingLimitSpentAmountValidationHistoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FundingLimitSpentAmountValidationHistories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FundingLimitSpentAmountValidationHistories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FundingLimitSpentAmountValidationHistories<DeSerializersT>,
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
    typeof FundingLimitSpentAmountValidationHistories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FundingLimitSpentAmountValidationHistories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_CURRENT: EnumField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_SPENT: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATA_UPDATE: EnumField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_SPENT_COMPUTED: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUNDING_SOURCE_ID: OrderableEdmTypeField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_REQUIRED: EnumField<
      FundingLimitSpentAmountValidationHistories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FundingLimitSpentAmountValidationHistories<DeSerializers>
    >;
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
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isCurrent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CURRENT: fieldBuilder.buildEnumField('IsCurrent', NoYes, true),
        /**
         * Static representation of the {@link limitSpent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_SPENT: fieldBuilder.buildEdmTypeField(
          'LimitSpent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dataUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_UPDATE: fieldBuilder.buildEnumField('DataUpdate', NoYes, true),
        /**
         * Static representation of the {@link limitSpentComputed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_SPENT_COMPUTED: fieldBuilder.buildEdmTypeField(
          'LimitSpentComputed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FundingSourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updateRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_REQUIRED: fieldBuilder.buildEnumField(
          'UpdateRequired',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FundingLimitSpentAmountValidationHistories
        )
      };
    }

    return this._schema;
  }
}
