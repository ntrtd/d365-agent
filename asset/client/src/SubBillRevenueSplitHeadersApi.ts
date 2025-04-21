/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillRevenueSplitHeaders } from './SubBillRevenueSplitHeaders';
import { SubBillRevenueSplitHeadersRequestBuilder } from './SubBillRevenueSplitHeadersRequestBuilder';
import { SubBillRevenueSplitLinesApi } from './SubBillRevenueSplitLinesApi';
import { SubBillRevenueSplitAllocationMethod } from './SubBillRevenueSplitAllocationMethod';
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
export class SubBillRevenueSplitHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillRevenueSplitHeaders<DeSerializersT>, DeSerializersT>
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
  ): SubBillRevenueSplitHeadersApi<DeSerializersT> {
    return new SubBillRevenueSplitHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillRevenueSplitHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_REVENUE_SPLIT_HEADER_ENTITY: OneToManyLink<
      SubBillRevenueSplitHeaders<DeSerializersT>,
      DeSerializersT,
      SubBillRevenueSplitLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillRevenueSplitLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATED_TO_SUB_BILL_REVENUE_SPLIT_HEADER_ENTITY: new OneToManyLink(
        'RelatedToSubBillRevenueSplitHeaderEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillRevenueSplitHeaders;

  requestBuilder(): SubBillRevenueSplitHeadersRequestBuilder<DeSerializersT> {
    return new SubBillRevenueSplitHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillRevenueSplitHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillRevenueSplitHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillRevenueSplitHeaders<DeSerializersT>,
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
    typeof SubBillRevenueSplitHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillRevenueSplitHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillRevenueSplitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_ITEM: OrderableEdmTypeField<
      SubBillRevenueSplitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_METHOD: EnumField<
      SubBillRevenueSplitHeaders<DeSerializers>,
      DeSerializersT,
      SubBillRevenueSplitAllocationMethod,
      true,
      true
    >;
    PARENT_VARIANT: OrderableEdmTypeField<
      SubBillRevenueSplitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillRevenueSplitHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_REVENUE_SPLIT_HEADER_ENTITY: OneToManyLink<
      SubBillRevenueSplitHeaders<DeSerializersT>,
      DeSerializersT,
      SubBillRevenueSplitLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillRevenueSplitHeaders<DeSerializers>>;
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
         * Static representation of the {@link parentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ITEM: fieldBuilder.buildEdmTypeField(
          'ParentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'AllocationMethod',
          SubBillRevenueSplitAllocationMethod,
          true
        ),
        /**
         * Static representation of the {@link parentVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_VARIANT: fieldBuilder.buildEdmTypeField(
          'ParentVariant',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillRevenueSplitHeaders)
      };
    }

    return this._schema;
  }
}
