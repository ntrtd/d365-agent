/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLeaveBalances } from './EssLeaveBalances';
import { EssLeaveBalancesRequestBuilder } from './EssLeaveBalancesRequestBuilder';
import { EssLeaveTypesApi } from './EssLeaveTypesApi';
import { LeaveTypesApi } from './LeaveTypesApi';
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
export class EssLeaveBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EssLeaveBalances<DeSerializersT>, DeSerializersT>
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
  ): EssLeaveBalancesApi<DeSerializersT> {
    return new EssLeaveBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      EssLeaveBalances<DeSerializersT>,
      DeSerializersT,
      EssLeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nonEssLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NON_ESS_LEAVE_TYPE: OneToOneLink<
      EssLeaveBalances<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EssLeaveTypesApi<DeSerializersT>,
      LeaveTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_TYPE: new OneToOneLink('LeaveType', this, linkedApis[0]),
      NON_ESS_LEAVE_TYPE: new OneToOneLink(
        'NonEssLeaveType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EssLeaveBalances;

  requestBuilder(): EssLeaveBalancesRequestBuilder<DeSerializersT> {
    return new EssLeaveBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssLeaveBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EssLeaveBalances<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EssLeaveBalances<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EssLeaveBalances, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssLeaveBalances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CARRY_FORWARD_AMOUNT: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAKEN_THIS_YEAR: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_THIS_YEAR: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUAL_RATE_DESCRIPTION: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCE_AVAILABLE: OrderableEdmTypeField<
      EssLeaveBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPE: OneToOneLink<
      EssLeaveBalances<DeSerializersT>,
      DeSerializersT,
      EssLeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nonEssLeaveType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NON_ESS_LEAVE_TYPE: OneToOneLink<
      EssLeaveBalances<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EssLeaveBalances<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastCarryForwardAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CARRY_FORWARD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LastCarryForwardAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link takenThisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAKEN_THIS_YEAR: fieldBuilder.buildEdmTypeField(
          'TakenThisYear',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalThisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_THIS_YEAR: fieldBuilder.buildEdmTypeField(
          'TotalThisYear',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accrualRateDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_RATE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AccrualRateDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link balanceAvailable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_AVAILABLE: fieldBuilder.buildEdmTypeField(
          'BalanceAvailable',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssLeaveBalances)
      };
    }

    return this._schema;
  }
}
