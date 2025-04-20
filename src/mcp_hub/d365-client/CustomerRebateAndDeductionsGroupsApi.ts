/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerRebateAndDeductionsGroups } from './CustomerRebateAndDeductionsGroups';
import { CustomerRebateAndDeductionsGroupsRequestBuilder } from './CustomerRebateAndDeductionsGroupsRequestBuilder';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { CustomerRebateAndDeductionsGroupAssignmentsApi } from './CustomerRebateAndDeductionsGroupAssignmentsApi';
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
export class CustomerRebateAndDeductionsGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerRebateAndDeductionsGroups<DeSerializersT>, DeSerializersT>
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
  ): CustomerRebateAndDeductionsGroupsApi<DeSerializersT> {
    return new CustomerRebateAndDeductionsGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      CustomerRebateAndDeductionsGroups<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerRebateAndDeductionsGroupAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: OneToManyLink<
      CustomerRebateAndDeductionsGroups<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[0]
      ),
      CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: new OneToManyLink(
        'CustomerRebateAndDeductionsGroupAssignments',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CustomerRebateAndDeductionsGroups;

  requestBuilder(): CustomerRebateAndDeductionsGroupsRequestBuilder<DeSerializersT> {
    return new CustomerRebateAndDeductionsGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerRebateAndDeductionsGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerRebateAndDeductionsGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerRebateAndDeductionsGroups<DeSerializersT>,
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
    typeof CustomerRebateAndDeductionsGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerRebateAndDeductionsGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerRebateAndDeductionsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      CustomerRebateAndDeductionsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DESCRIPTION: OrderableEdmTypeField<
      CustomerRebateAndDeductionsGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      CustomerRebateAndDeductionsGroups<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerRebateAndDeductionsGroupAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ASSIGNMENTS: OneToManyLink<
      CustomerRebateAndDeductionsGroups<DeSerializersT>,
      DeSerializersT,
      CustomerRebateAndDeductionsGroupAssignmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerRebateAndDeductionsGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GroupDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerRebateAndDeductionsGroups)
      };
    }

    return this._schema;
  }
}
