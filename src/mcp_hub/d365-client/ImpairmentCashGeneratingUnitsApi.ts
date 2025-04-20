/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImpairmentCashGeneratingUnits } from './ImpairmentCashGeneratingUnits';
import { ImpairmentCashGeneratingUnitsRequestBuilder } from './ImpairmentCashGeneratingUnitsRequestBuilder';
import { ImpairmentCashGeneratingUnitGroupsApi } from './ImpairmentCashGeneratingUnitGroupsApi';
import { AssetImpairmentCguAssetAllocBasisJp } from './AssetImpairmentCguAssetAllocBasisJp';
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
export class ImpairmentCashGeneratingUnitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ImpairmentCashGeneratingUnits<DeSerializersT>, DeSerializersT>
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
  ): ImpairmentCashGeneratingUnitsApi<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link impairmentCashGeneratingUnitGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPAIRMENT_CASH_GENERATING_UNIT_GROUP: OneToOneLink<
      ImpairmentCashGeneratingUnits<DeSerializersT>,
      DeSerializersT,
      ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      IMPAIRMENT_CASH_GENERATING_UNIT_GROUP: new OneToOneLink(
        'ImpairmentCashGeneratingUnitGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ImpairmentCashGeneratingUnits;

  requestBuilder(): ImpairmentCashGeneratingUnitsRequestBuilder<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ImpairmentCashGeneratingUnits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ImpairmentCashGeneratingUnits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImpairmentCashGeneratingUnits<DeSerializersT>,
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
    typeof ImpairmentCashGeneratingUnits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImpairmentCashGeneratingUnits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH_GENERATING_UNIT_NUMBER: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPAIRMENT_ALLOCATION_BASIS: EnumField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      AssetImpairmentCguAssetAllocBasisJp,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CGU_GROUP_NAME: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDISCOUNTED_CASH_FLOW_LAST_UPDATED_DATE: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNDISCOUNTED_CASH_FLOW: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOVERABLE_AMOUNT: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOVERABLE_AMOUNT_LAST_UPDATED_DATE: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impairmentCashGeneratingUnitGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPAIRMENT_CASH_GENERATING_UNIT_GROUP: OneToOneLink<
      ImpairmentCashGeneratingUnits<DeSerializersT>,
      DeSerializersT,
      ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ImpairmentCashGeneratingUnits<DeSerializers>>;
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
         * Static representation of the {@link cashGeneratingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_GENERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CashGeneratingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link impairmentAllocationBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPAIRMENT_ALLOCATION_BASIS: fieldBuilder.buildEnumField(
          'ImpairmentAllocationBasis',
          AssetImpairmentCguAssetAllocBasisJp,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link cguGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CGU_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CGUGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link undiscountedCashFlowLastUpdatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDISCOUNTED_CASH_FLOW_LAST_UPDATED_DATE:
          fieldBuilder.buildEdmTypeField(
            'UndiscountedCashFlowLastUpdatedDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link undiscountedCashFlow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDISCOUNTED_CASH_FLOW: fieldBuilder.buildEdmTypeField(
          'UndiscountedCashFlow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recoverableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVERABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecoverableAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recoverableAmountLastUpdatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVERABLE_AMOUNT_LAST_UPDATED_DATE: fieldBuilder.buildEdmTypeField(
          'RecoverableAmountLastUpdatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImpairmentCashGeneratingUnits)
      };
    }

    return this._schema;
  }
}
