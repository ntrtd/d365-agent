/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseTravelRequisitions } from './ExpenseTravelRequisitions';
import { ExpenseTravelRequisitionsRequestBuilder } from './ExpenseTravelRequisitionsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { TrvRequisitionReconciliationStatus } from './TrvRequisitionReconciliationStatus';
import { TrvRequisitionApprovalStatus } from './TrvRequisitionApprovalStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpenseTravelRequisitionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExpenseTravelRequisitions<DeSerializersT>, DeSerializersT>
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
  ): ExpenseTravelRequisitionsApi<DeSerializersT> {
    return new ExpenseTravelRequisitionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpenseTravelRequisitions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ExpenseTravelRequisitions;

  requestBuilder(): ExpenseTravelRequisitionsRequestBuilder<DeSerializersT> {
    return new ExpenseTravelRequisitionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseTravelRequisitions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpenseTravelRequisitions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpenseTravelRequisitions<DeSerializersT>,
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
    typeof ExpenseTravelRequisitions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseTravelRequisitions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRAVEL_REQUISITION_NUMBER: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESTINATION: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILIATION_STATUS: EnumField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      TrvRequisitionReconciliationStatus,
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_PURPOSE: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAVEL_DESCRIPTION: OrderableEdmTypeField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STATUS: EnumField<
      ExpenseTravelRequisitions<DeSerializers>,
      DeSerializersT,
      TrvRequisitionApprovalStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpenseTravelRequisitions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseTravelRequisitions<DeSerializers>>;
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
         * Static representation of the {@link travelRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TravelRequisitionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link destination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION: fieldBuilder.buildEdmTypeField(
          'Destination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconciliationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILIATION_STATUS: fieldBuilder.buildEnumField(
          'ReconciliationStatus',
          TrvRequisitionReconciliationStatus,
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PURPOSE: fieldBuilder.buildEdmTypeField(
          'BusinessPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link travelDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TravelDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          TrvRequisitionApprovalStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseTravelRequisitions)
      };
    }

    return this._schema;
  }
}
