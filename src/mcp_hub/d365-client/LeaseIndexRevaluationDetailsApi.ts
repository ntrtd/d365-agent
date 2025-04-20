/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseIndexRevaluationDetails } from './LeaseIndexRevaluationDetails';
import { LeaseIndexRevaluationDetailsRequestBuilder } from './LeaseIndexRevaluationDetailsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { AssetLeaseType } from './AssetLeaseType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaseIndexRevaluationDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseIndexRevaluationDetails<DeSerializersT>, DeSerializersT>
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
  ): LeaseIndexRevaluationDetailsApi<DeSerializersT> {
    return new LeaseIndexRevaluationDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link liabilityAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIABILITY_ACCOUNT_COMBINATION: OneToOneLink<
      LeaseIndexRevaluationDetails<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCOUNT_COMBINATION: OneToOneLink<
      LeaseIndexRevaluationDetails<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LIABILITY_ACCOUNT_COMBINATION: new OneToOneLink(
        'LiabilityAccountCombination',
        this,
        linkedApis[0]
      ),
      ASSET_ACCOUNT_COMBINATION: new OneToOneLink(
        'AssetAccountCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = LeaseIndexRevaluationDetails;

  requestBuilder(): LeaseIndexRevaluationDetailsRequestBuilder<DeSerializersT> {
    return new LeaseIndexRevaluationDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseIndexRevaluationDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseIndexRevaluationDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseIndexRevaluationDetails<DeSerializersT>,
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
    typeof LeaseIndexRevaluationDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseIndexRevaluationDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEASE_ID: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_ID: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NEW_PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_INDEX_RATE: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE_DATE: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OLD_INDEX_RATE: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_TYPE: EnumField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    ASSET_ADJUSTMENT: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LIABILITY_ADJUSTMENT: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_PAYMENT: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVALUATION_DATE: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESSED: EnumField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_CHANGE_LINES: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIABILITY_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseIndexRevaluationDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link liabilityAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIABILITY_ACCOUNT_COMBINATION: OneToOneLink<
      LeaseIndexRevaluationDetails<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCOUNT_COMBINATION: OneToOneLink<
      LeaseIndexRevaluationDetails<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaseIndexRevaluationDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField(
          'LeaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link newPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewPaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newIndexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'NewIndexRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link indexRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'IndexRateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link oldIndexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OLD_INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'OldIndexRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_TYPE: fieldBuilder.buildEnumField(
          'LeaseType',
          AssetLeaseType,
          true
        ),
        /**
         * Static representation of the {@link assetAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'AssetAdjustment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link liabilityAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABILITY_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'LiabilityAdjustment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variablePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'VariablePayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revaluationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_DATE: fieldBuilder.buildEdmTypeField(
          'RevaluationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSED: fieldBuilder.buildEnumField('Processed', NoYes, true),
        /**
         * Static representation of the {@link numberOfChangeLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_CHANGE_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfChangeLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link liabilityAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABILITY_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LiabilityAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AssetAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseIndexRevaluationDetails)
      };
    }

    return this._schema;
  }
}
