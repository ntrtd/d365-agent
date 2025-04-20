/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TotalCompStatementSectionBenefits } from './TotalCompStatementSectionBenefits';
import { TotalCompStatementSectionBenefitsRequestBuilder } from './TotalCompStatementSectionBenefitsRequestBuilder';
import { BenefitsApi } from './BenefitsApi';
import { TotalCompStatementSectionsHeaderApi } from './TotalCompStatementSectionsHeaderApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TotalCompStatementSectionBenefitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TotalCompStatementSectionBenefits<DeSerializersT>, DeSerializersT>
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
  ): TotalCompStatementSectionBenefitsApi<DeSerializersT> {
    return new TotalCompStatementSectionBenefitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link hcmBenefitEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_BENEFIT_ENTITY: OneToOneLink<
      TotalCompStatementSectionBenefits<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmTotalCompStatementSectionHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: OneToOneLink<
      TotalCompStatementSectionBenefits<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsApi<DeSerializersT>,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      HCM_BENEFIT_ENTITY: new OneToOneLink(
        'HcmBenefitEntity',
        this,
        linkedApis[0]
      ),
      HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: new OneToOneLink(
        'HcmTotalCompStatementSectionHeaderEntity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TotalCompStatementSectionBenefits;

  requestBuilder(): TotalCompStatementSectionBenefitsRequestBuilder<DeSerializersT> {
    return new TotalCompStatementSectionBenefitsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TotalCompStatementSectionBenefits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TotalCompStatementSectionBenefits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TotalCompStatementSectionBenefits<DeSerializersT>,
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
    typeof TotalCompStatementSectionBenefits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TotalCompStatementSectionBenefits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATEMENT_SECTION_ID: OrderableEdmTypeField<
      TotalCompStatementSectionBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      TotalCompStatementSectionBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmBenefitEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_BENEFIT_ENTITY: OneToOneLink<
      TotalCompStatementSectionBenefits<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmTotalCompStatementSectionHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_TOTAL_COMP_STATEMENT_SECTION_HEADER_ENTITY: OneToOneLink<
      TotalCompStatementSectionBenefits<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionsHeaderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TotalCompStatementSectionBenefits<DeSerializers>>;
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
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TotalCompStatementSectionBenefits)
      };
    }

    return this._schema;
  }
}
