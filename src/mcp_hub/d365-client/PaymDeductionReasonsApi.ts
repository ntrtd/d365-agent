/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymDeductionReasons } from './PaymDeductionReasons';
import { PaymDeductionReasonsRequestBuilder } from './PaymDeductionReasonsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TamDeductionClaimBasis } from './TamDeductionClaimBasis';
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
export class PaymDeductionReasonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymDeductionReasons<DeSerializersT>, DeSerializersT>
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
  ): PaymDeductionReasonsApi<DeSerializersT> {
    return new PaymDeductionReasonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PaymDeductionReasons<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PaymDeductionReasons;

  requestBuilder(): PaymDeductionReasonsRequestBuilder<DeSerializersT> {
    return new PaymDeductionReasonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymDeductionReasons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymDeductionReasons<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymDeductionReasons<DeSerializersT>,
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
    typeof PaymDeductionReasons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymDeductionReasons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLAIM_REASON_ID: OrderableEdmTypeField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLAIM_POSTING_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_REASON_CODE_ID: OrderableEdmTypeField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLAIM_BASIS: EnumField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      TamDeductionClaimBasis,
      true,
      true
    >;
    DEDUCTION_TYPE: OrderableEdmTypeField<
      PaymDeductionReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PaymDeductionReasons<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymDeductionReasons<DeSerializers>>;
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
         * Static representation of the {@link claimReasonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_REASON_ID: fieldBuilder.buildEdmTypeField(
          'ClaimReasonId',
          'Edm.String',
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
         * Static representation of the {@link claimPostingLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_POSTING_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ClaimPostingLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link returnReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link claimBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_BASIS: fieldBuilder.buildEnumField(
          'ClaimBasis',
          TamDeductionClaimBasis,
          true
        ),
        /**
         * Static representation of the {@link deductionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_TYPE: fieldBuilder.buildEdmTypeField(
          'DeductionType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymDeductionReasons)
      };
    }

    return this._schema;
  }
}
