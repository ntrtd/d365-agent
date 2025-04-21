/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateStatusTables } from './RebateStatusTables';
import { RebateStatusTablesRequestBuilder } from './RebateStatusTablesRequestBuilder';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { RebateAndDeductionsParametersApi } from './RebateAndDeductionsParametersApi';
import { RebateAndDeductionsAgreementDealsApi } from './RebateAndDeductionsAgreementDealsApi';
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
export class RebateStatusTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RebateStatusTables<DeSerializersT>, DeSerializersT>
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
  ): RebateStatusTablesApi<DeSerializersT> {
    return new RebateStatusTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateStatusTables<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_PARAMETERS: OneToManyLink<
      RebateStatusTables<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementDeals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: OneToManyLink<
      RebateStatusTables<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      RebateAndDeductionsParametersApi<DeSerializersT>,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[0]
      ),
      REBATE_AND_DEDUCTIONS_PARAMETERS: new OneToManyLink(
        'RebateAndDeductionsParameters',
        this,
        linkedApis[1]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: new OneToManyLink(
        'RebateAndDeductionsAgreementDeals',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = RebateStatusTables;

  requestBuilder(): RebateStatusTablesRequestBuilder<DeSerializersT> {
    return new RebateStatusTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RebateStatusTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RebateStatusTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateStatusTables<DeSerializersT>,
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
    typeof RebateStatusTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateStatusTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATUS_ID: OrderableEdmTypeField<
      RebateStatusTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS_DESCRIPTION: OrderableEdmTypeField<
      RebateStatusTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateStatusTables<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_PARAMETERS: OneToManyLink<
      RebateStatusTables<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementDeals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: OneToManyLink<
      RebateStatusTables<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RebateStatusTables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link statusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_ID: fieldBuilder.buildEdmTypeField(
          'StatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link statusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StatusDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RebateStatusTables)
      };
    }

    return this._schema;
  }
}
