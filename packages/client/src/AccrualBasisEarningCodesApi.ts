/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualBasisEarningCodes } from './AccrualBasisEarningCodes';
import { AccrualBasisEarningCodesRequestBuilder } from './AccrualBasisEarningCodesRequestBuilder';
import { EarningCodeGroupsApi } from './EarningCodeGroupsApi';
import { AccrualPlansApi } from './AccrualPlansApi';
import { PayrollAccrualType } from './PayrollAccrualType';
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
export class AccrualBasisEarningCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccrualBasisEarningCodes<DeSerializersT>, DeSerializersT>
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
  ): AccrualBasisEarningCodesApi<DeSerializersT> {
    return new AccrualBasisEarningCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link earningCodeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE_GROUP: OneToOneLink<
      AccrualBasisEarningCodes<DeSerializersT>,
      DeSerializersT,
      EarningCodeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      AccrualBasisEarningCodes<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EarningCodeGroupsApi<DeSerializersT>,
      AccrualPlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EARNING_CODE_GROUP: new OneToOneLink(
        'EarningCodeGroup',
        this,
        linkedApis[0]
      ),
      ACCRUAL_PLAN: new OneToOneLink('AccrualPlan', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AccrualBasisEarningCodes;

  requestBuilder(): AccrualBasisEarningCodesRequestBuilder<DeSerializersT> {
    return new AccrualBasisEarningCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccrualBasisEarningCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AccrualBasisEarningCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccrualBasisEarningCodes<DeSerializersT>,
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
    typeof AccrualBasisEarningCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccrualBasisEarningCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCRUAL_ID: OrderableEdmTypeField<
      AccrualBasisEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      AccrualBasisEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_GROUP_ID: OrderableEdmTypeField<
      AccrualBasisEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCRUAL_TYPE: EnumField<
      AccrualBasisEarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollAccrualType,
      true,
      true
    >;
    ACCRUAL_RATE: OrderableEdmTypeField<
      AccrualBasisEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earningCodeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE_GROUP: OneToOneLink<
      AccrualBasisEarningCodes<DeSerializersT>,
      DeSerializersT,
      EarningCodeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      AccrualBasisEarningCodes<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccrualBasisEarningCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link earningCodeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accrualType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_TYPE: fieldBuilder.buildEnumField(
          'AccrualType',
          PayrollAccrualType,
          true
        ),
        /**
         * Static representation of the {@link accrualRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_RATE: fieldBuilder.buildEdmTypeField(
          'AccrualRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccrualBasisEarningCodes)
      };
    }

    return this._schema;
  }
}
