/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EarningCodeGroups } from './EarningCodeGroups';
import { EarningCodeGroupsRequestBuilder } from './EarningCodeGroupsRequestBuilder';
import { AccrualBasisEarningCodesApi } from './AccrualBasisEarningCodesApi';
import { TotalCompStatementSectionEarningsApi } from './TotalCompStatementSectionEarningsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EarningCodeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EarningCodeGroups<DeSerializersT>, DeSerializersT>
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
  ): EarningCodeGroupsApi<DeSerializersT> {
    return new EarningCodeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link accrualBasisEarningCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_BASIS_EARNING_CODES: OneToManyLink<
      EarningCodeGroups<DeSerializersT>,
      DeSerializersT,
      AccrualBasisEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionEarning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_EARNING: OneToManyLink<
      EarningCodeGroups<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionEarningsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AccrualBasisEarningCodesApi<DeSerializersT>,
      TotalCompStatementSectionEarningsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ACCRUAL_BASIS_EARNING_CODES: new OneToManyLink(
        'AccrualBasisEarningCodes',
        this,
        linkedApis[0]
      ),
      TOTAL_COMP_STATEMENT_SECTION_EARNING: new OneToManyLink(
        'TotalCompStatementSectionEarning',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EarningCodeGroups;

  requestBuilder(): EarningCodeGroupsRequestBuilder<DeSerializersT> {
    return new EarningCodeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EarningCodeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EarningCodeGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EarningCodeGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EarningCodeGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EarningCodeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EARNING_CODE_GROUP: OrderableEdmTypeField<
      EarningCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EarningCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualBasisEarningCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_BASIS_EARNING_CODES: OneToManyLink<
      EarningCodeGroups<DeSerializersT>,
      DeSerializersT,
      AccrualBasisEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionEarning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_EARNING: OneToManyLink<
      EarningCodeGroups<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionEarningsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EarningCodeGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link earningCodeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_GROUP: fieldBuilder.buildEdmTypeField(
          'EarningCodeGroup',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EarningCodeGroups)
      };
    }

    return this._schema;
  }
}
