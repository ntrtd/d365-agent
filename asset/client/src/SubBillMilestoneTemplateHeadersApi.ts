/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillMilestoneTemplateHeaders } from './SubBillMilestoneTemplateHeaders';
import { SubBillMilestoneTemplateHeadersRequestBuilder } from './SubBillMilestoneTemplateHeadersRequestBuilder';
import { SubBillMilestoneTemplateLinesApi } from './SubBillMilestoneTemplateLinesApi';
import { SubBillAllocationMethod } from './SubBillAllocationMethod';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SubBillMilestoneTemplateHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillMilestoneTemplateHeaders<DeSerializersT>, DeSerializersT>
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
  ): SubBillMilestoneTemplateHeadersApi<DeSerializersT> {
    return new SubBillMilestoneTemplateHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillMilestoneTemplateHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_MILESTONE_TEMPLATE_HEADER_ENTITY: OneToManyLink<
      SubBillMilestoneTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      SubBillMilestoneTemplateLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillMilestoneTemplateLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATED_TO_SUB_BILL_MILESTONE_TEMPLATE_HEADER_ENTITY: new OneToManyLink(
        'RelatedToSubBillMilestoneTemplateHeaderEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillMilestoneTemplateHeaders;

  requestBuilder(): SubBillMilestoneTemplateHeadersRequestBuilder<DeSerializersT> {
    return new SubBillMilestoneTemplateHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillMilestoneTemplateHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillMilestoneTemplateHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillMilestoneTemplateHeaders<DeSerializersT>,
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
    typeof SubBillMilestoneTemplateHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillMilestoneTemplateHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillMilestoneTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MILESTONE_TEMPLATE: OrderableEdmTypeField<
      SubBillMilestoneTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_METHOD: EnumField<
      SubBillMilestoneTemplateHeaders<DeSerializers>,
      DeSerializersT,
      SubBillAllocationMethod,
      true,
      true
    >;
    TOTAL_AMOUNT: OrderableEdmTypeField<
      SubBillMilestoneTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillMilestoneTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillMilestoneTemplateHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_MILESTONE_TEMPLATE_HEADER_ENTITY: OneToManyLink<
      SubBillMilestoneTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      SubBillMilestoneTemplateLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillMilestoneTemplateHeaders<DeSerializers>>;
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
         * Static representation of the {@link milestoneTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'MilestoneTemplate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'AllocationMethod',
          SubBillAllocationMethod,
          true
        ),
        /**
         * Static representation of the {@link totalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalAmount',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', SubBillMilestoneTemplateHeaders)
      };
    }

    return this._schema;
  }
}
