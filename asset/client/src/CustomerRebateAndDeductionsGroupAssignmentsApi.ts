/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerRebateAndDeductionsGroupAssignments } from './CustomerRebateAndDeductionsGroupAssignments';
import { CustomerRebateAndDeductionsGroupAssignmentsRequestBuilder } from './CustomerRebateAndDeductionsGroupAssignmentsRequestBuilder';
import { CustomerRebateAndDeductionsGroupsApi } from './CustomerRebateAndDeductionsGroupsApi';
import { CustomersV3Api } from './CustomersV3Api';
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
export class CustomerRebateAndDeductionsGroupAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
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
  ): CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT> {
    return new CustomerRebateAndDeductionsGroupAssignmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerRebateAndDeductionsGroupsApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP: new OneToOneLink(
        'CustomerRebateAndDeductionsGroup',
        this,
        linkedApis[0]
      ),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CustomerRebateAndDeductionsGroupAssignments;

  requestBuilder(): CustomerRebateAndDeductionsGroupAssignmentsRequestBuilder<DeSerializersT> {
    return new CustomerRebateAndDeductionsGroupAssignmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
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
    typeof CustomerRebateAndDeductionsGroupAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerRebateAndDeductionsGroupAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRebateAndDeductionsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP: OneToOneLink<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CustomerRebateAndDeductionsGroupAssignments<DeSerializers>
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
         * Static representation of the {@link customerRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateAndDeductionsGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
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
          CustomerRebateAndDeductionsGroupAssignments
        )
      };
    }

    return this._schema;
  }
}
