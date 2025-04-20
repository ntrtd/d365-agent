/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentContractors } from './EmploymentContractors';
import { EmploymentContractorsRequestBuilder } from './EmploymentContractorsRequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { PurchaseOrderHeadersApi } from './PurchaseOrderHeadersApi';
import { EmploymentsApi } from './EmploymentsApi';
import { PurchaseOrderHeadersV2Api } from './PurchaseOrderHeadersV2Api';
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
export class EmploymentContractorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmploymentContractors<DeSerializersT>, DeSerializersT>
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
  ): EmploymentContractorsApi<DeSerializersT> {
    return new EmploymentContractorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsV2Api<DeSerializersT>,
      PurchaseOrderHeadersApi<DeSerializersT>,
      EmploymentsApi<DeSerializersT>,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[0]),
      PURCHASE_ORDER_HEADER: new OneToOneLink(
        'PurchaseOrderHeader',
        this,
        linkedApis[1]
      ),
      EMPLOYMENT: new OneToOneLink('Employment', this, linkedApis[2]),
      PURCHASE_ORDER_HEADER_V_2: new OneToOneLink(
        'PurchaseOrderHeaderV2',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = EmploymentContractors;

  requestBuilder(): EmploymentContractorsRequestBuilder<DeSerializersT> {
    return new EmploymentContractorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmploymentContractors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmploymentContractors<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EmploymentContractors<DeSerializersT>,
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
    typeof EmploymentContractors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmploymentContractors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_REQUISITION_ID: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      EmploymentContractors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToOneLink<
      EmploymentContractors<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmploymentContractors<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseRequisitionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REQUISITION_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseRequisitionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmploymentContractors)
      };
    }

    return this._schema;
  }
}
