/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TotalCompStatementSectionEarnings } from './TotalCompStatementSectionEarnings';
import { TotalCompStatementSectionEarningsRequestBuilder } from './TotalCompStatementSectionEarningsRequestBuilder';
import { TotalCompStatementSectionsHeaderApi } from './TotalCompStatementSectionsHeaderApi';
import { EarningCodeGroupsApi } from './EarningCodeGroupsApi';
import { PayrollEarningCodeEarningGroupType } from './PayrollEarningCodeEarningGroupType';
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
export class TotalCompStatementSectionEarningsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TotalCompStatementSectionEarnings<DeSerializersT>, DeSerializersT>
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
  ): TotalCompStatementSectionEarningsApi<DeSerializersT> {
    return new TotalCompStatementSectionEarningsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link hcmTotalCompStatementSectionHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: OneToOneLink<
      TotalCompStatementSectionEarnings<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEarningCodeGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_CODE_GROUP_ENTITY: OneToOneLink<
      TotalCompStatementSectionEarnings<DeSerializersT>,
      DeSerializersT,
      EarningCodeGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TotalCompStatementSectionsHeaderApi<DeSerializersT>,
      EarningCodeGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: new OneToOneLink(
        'HcmTotalCompStatementSectionHeaderEntity',
        this,
        linkedApis[0]
      ),
      PAYROLL_EARNING_CODE_GROUP_ENTITY: new OneToOneLink(
        'PayrollEarningCodeGroupEntity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TotalCompStatementSectionEarnings;

  requestBuilder(): TotalCompStatementSectionEarningsRequestBuilder<DeSerializersT> {
    return new TotalCompStatementSectionEarningsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TotalCompStatementSectionEarnings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TotalCompStatementSectionEarnings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TotalCompStatementSectionEarnings<DeSerializersT>,
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
    typeof TotalCompStatementSectionEarnings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TotalCompStatementSectionEarnings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATEMENT_SECTION_ID: OrderableEdmTypeField<
      TotalCompStatementSectionEarnings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_GROUP_ID: OrderableEdmTypeField<
      TotalCompStatementSectionEarnings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      TotalCompStatementSectionEarnings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_OR_GROUP_TYPE: EnumField<
      TotalCompStatementSectionEarnings<DeSerializers>,
      DeSerializersT,
      PayrollEarningCodeEarningGroupType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmTotalCompStatementSectionHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: OneToOneLink<
      TotalCompStatementSectionEarnings<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEarningCodeGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_CODE_GROUP_ENTITY: OneToOneLink<
      TotalCompStatementSectionEarnings<DeSerializersT>,
      DeSerializersT,
      EarningCodeGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TotalCompStatementSectionEarnings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link statementSectionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_SECTION_ID: fieldBuilder.buildEdmTypeField(
          'StatementSectionId',
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
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link earningCodeOrGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_OR_GROUP_TYPE: fieldBuilder.buildEnumField(
          'EarningCodeOrGroupType',
          PayrollEarningCodeEarningGroupType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TotalCompStatementSectionEarnings)
      };
    }

    return this._schema;
  }
}
