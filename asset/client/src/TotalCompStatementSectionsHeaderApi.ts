/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TotalCompStatementSectionsHeader } from './TotalCompStatementSectionsHeader';
import { TotalCompStatementSectionsHeaderRequestBuilder } from './TotalCompStatementSectionsHeaderRequestBuilder';
import { TotalCompStatementSectionTaxesApi } from './TotalCompStatementSectionTaxesApi';
import { TotalCompStatementSectionEarningsApi } from './TotalCompStatementSectionEarningsApi';
import { TotalCompStatementSectionBenefitsApi } from './TotalCompStatementSectionBenefitsApi';
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
export class TotalCompStatementSectionsHeaderApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TotalCompStatementSectionsHeader<DeSerializersT>, DeSerializersT>
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
  ): TotalCompStatementSectionsHeaderApi<DeSerializersT> {
    return new TotalCompStatementSectionsHeaderApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_TAX: OneToManyLink<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionTaxesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionEarning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_EARNING: OneToManyLink<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionEarningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_BENEFIT: OneToManyLink<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionBenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TotalCompStatementSectionTaxesApi<DeSerializersT>,
      TotalCompStatementSectionEarningsApi<DeSerializersT>,
      TotalCompStatementSectionBenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TOTAL_COMP_STATEMENT_SECTION_TAX: new OneToManyLink(
        'TotalCompStatementSectionTax',
        this,
        linkedApis[0]
      ),
      TOTAL_COMP_STATEMENT_SECTION_EARNING: new OneToManyLink(
        'TotalCompStatementSectionEarning',
        this,
        linkedApis[1]
      ),
      TOTAL_COMP_STATEMENT_SECTION_BENEFIT: new OneToManyLink(
        'TotalCompStatementSectionBenefit',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = TotalCompStatementSectionsHeader;

  requestBuilder(): TotalCompStatementSectionsHeaderRequestBuilder<DeSerializersT> {
    return new TotalCompStatementSectionsHeaderRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TotalCompStatementSectionsHeader<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TotalCompStatementSectionsHeader<DeSerializersT>,
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
    typeof TotalCompStatementSectionsHeader,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TotalCompStatementSectionsHeader,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATEMENT_SECTION_ID: OrderableEdmTypeField<
      TotalCompStatementSectionsHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_SECTION_NAME: OrderableEdmTypeField<
      TotalCompStatementSectionsHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_TAX: OneToManyLink<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionTaxesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionEarning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_EARNING: OneToManyLink<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionEarningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_BENEFIT: OneToManyLink<
      TotalCompStatementSectionsHeader<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionBenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TotalCompStatementSectionsHeader<DeSerializers>>;
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
         * Static representation of the {@link statementSectionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_SECTION_NAME: fieldBuilder.buildEdmTypeField(
          'StatementSectionName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TotalCompStatementSectionsHeader)
      };
    }

    return this._schema;
  }
}
