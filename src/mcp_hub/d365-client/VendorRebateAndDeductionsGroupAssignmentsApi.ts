/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorRebateAndDeductionsGroupAssignments } from './VendorRebateAndDeductionsGroupAssignments';
import { VendorRebateAndDeductionsGroupAssignmentsRequestBuilder } from './VendorRebateAndDeductionsGroupAssignmentsRequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { VendorRebateAndDeductionsGroupsApi } from './VendorRebateAndDeductionsGroupsApi';
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
export class VendorRebateAndDeductionsGroupAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
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
  ): VendorRebateAndDeductionsGroupAssignmentsApi<DeSerializersT> {
    return new VendorRebateAndDeductionsGroupAssignmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      VendorRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsV2Api<DeSerializersT>,
      VendorRebateAndDeductionsGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[0]),
      VENDOR_REBATE_AND_DEDUCTIONS_GROUP: new OneToOneLink(
        'VendorRebateAndDeductionsGroup',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = VendorRebateAndDeductionsGroupAssignments;

  requestBuilder(): VendorRebateAndDeductionsGroupAssignmentsRequestBuilder<DeSerializersT> {
    return new VendorRebateAndDeductionsGroupAssignmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
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
    typeof VendorRebateAndDeductionsGroupAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorRebateAndDeductionsGroupAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      VendorRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      VendorRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      VendorRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      VendorRebateAndDeductionsGroupAssignments<DeSerializers>
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
         * Static representation of the {@link vendorRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorRebateAndDeductionsGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
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
          VendorRebateAndDeductionsGroupAssignments
        )
      };
    }

    return this._schema;
  }
}
