/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductRebateAndDeductionsGroupAssignments } from './ReleasedProductRebateAndDeductionsGroupAssignments';
import { ReleasedProductRebateAndDeductionsGroupAssignmentsRequestBuilder } from './ReleasedProductRebateAndDeductionsGroupAssignmentsRequestBuilder';
import { ProductRebateAndDeductionsGroupsApi } from './ProductRebateAndDeductionsGroupsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
export class ReleasedProductRebateAndDeductionsGroupAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT
    >
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
  ): ReleasedProductRebateAndDeductionsGroupAssignmentsApi<DeSerializersT> {
    return new ReleasedProductRebateAndDeductionsGroupAssignmentsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProductRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductRebateAndDeductionsGroupsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_REBATE_AND_DEDUCTIONS_GROUP: new OneToOneLink(
        'ReleasedProductRebateAndDeductionsGroup',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductRebateAndDeductionsGroupAssignments;

  requestBuilder(): ReleasedProductRebateAndDeductionsGroupAssignmentsRequestBuilder<DeSerializersT> {
    return new ReleasedProductRebateAndDeductionsGroupAssignmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
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
    typeof ReleasedProductRebateAndDeductionsGroupAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductRebateAndDeductionsGroupAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProductRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ReleasedProductRebateAndDeductionsGroupAssignments<DeSerializers>
    >;
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
         * Static representation of the {@link productRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductRebateAndDeductionsGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ReleasedProductRebateAndDeductionsGroupAssignments
        )
      };
    }

    return this._schema;
  }
}
