/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollTaxGroups } from './PayrollTaxGroups';
import { PayrollTaxGroupsRequestBuilder } from './PayrollTaxGroupsRequestBuilder';
import { BenefitTaxRulesUsApi } from './BenefitTaxRulesUsApi';
import { PayrollTaxGroupCodesApi } from './PayrollTaxGroupCodesApi';
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
export class PayrollTaxGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayrollTaxGroups<DeSerializersT>, DeSerializersT>
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
  ): PayrollTaxGroupsApi<DeSerializersT> {
    return new PayrollTaxGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitTaxRuleUs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_TAX_RULE_US: OneToManyLink<
      PayrollTaxGroups<DeSerializersT>,
      DeSerializersT,
      BenefitTaxRulesUsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_CODES: OneToManyLink<
      PayrollTaxGroups<DeSerializersT>,
      DeSerializersT,
      PayrollTaxGroupCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitTaxRulesUsApi<DeSerializersT>,
      PayrollTaxGroupCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_TAX_RULE_US: new OneToManyLink(
        'BenefitTaxRuleUS',
        this,
        linkedApis[0]
      ),
      TAX_GROUP_CODES: new OneToManyLink('TaxGroupCodes', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PayrollTaxGroups;

  requestBuilder(): PayrollTaxGroupsRequestBuilder<DeSerializersT> {
    return new PayrollTaxGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollTaxGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayrollTaxGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayrollTaxGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayrollTaxGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollTaxGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_ID: OrderableEdmTypeField<
      PayrollTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayrollTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitTaxRuleUs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_TAX_RULE_US: OneToManyLink<
      PayrollTaxGroups<DeSerializersT>,
      DeSerializersT,
      BenefitTaxRulesUsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_CODES: OneToManyLink<
      PayrollTaxGroups<DeSerializersT>,
      DeSerializersT,
      PayrollTaxGroupCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollTaxGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
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
        ALL_FIELDS: new AllFields('*', PayrollTaxGroups)
      };
    }

    return this._schema;
  }
}
