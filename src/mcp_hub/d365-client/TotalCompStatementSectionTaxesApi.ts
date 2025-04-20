/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TotalCompStatementSectionTaxes } from './TotalCompStatementSectionTaxes';
import { TotalCompStatementSectionTaxesRequestBuilder } from './TotalCompStatementSectionTaxesRequestBuilder';
import { TotalCompStatementSectionsHeaderApi } from './TotalCompStatementSectionsHeaderApi';
import { PayrollTaxCodeTaxGroupType } from './PayrollTaxCodeTaxGroupType';
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
export class TotalCompStatementSectionTaxesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TotalCompStatementSectionTaxes<DeSerializersT>, DeSerializersT>
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
  ): TotalCompStatementSectionTaxesApi<DeSerializersT> {
    return new TotalCompStatementSectionTaxesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link hcmTotalCompStatementSectionHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: OneToOneLink<
      TotalCompStatementSectionTaxes<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TotalCompStatementSectionsHeaderApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: new OneToOneLink(
        'HcmTotalCompStatementSectionHeaderEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TotalCompStatementSectionTaxes;

  requestBuilder(): TotalCompStatementSectionTaxesRequestBuilder<DeSerializersT> {
    return new TotalCompStatementSectionTaxesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TotalCompStatementSectionTaxes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TotalCompStatementSectionTaxes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TotalCompStatementSectionTaxes<DeSerializersT>,
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
    typeof TotalCompStatementSectionTaxes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TotalCompStatementSectionTaxes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATEMENT_SECTION_ID: OrderableEdmTypeField<
      TotalCompStatementSectionTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      TotalCompStatementSectionTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      TotalCompStatementSectionTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      TotalCompStatementSectionTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_GROUP_TYPE: EnumField<
      TotalCompStatementSectionTaxes<DeSerializers>,
      DeSerializersT,
      PayrollTaxCodeTaxGroupType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmTotalCompStatementSectionHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: OneToOneLink<
      TotalCompStatementSectionTaxes<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TotalCompStatementSectionTaxes<DeSerializers>>;
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
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCodeGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_GROUP_TYPE: fieldBuilder.buildEnumField(
          'TaxCodeGroupType',
          PayrollTaxCodeTaxGroupType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TotalCompStatementSectionTaxes)
      };
    }

    return this._schema;
  }
}
