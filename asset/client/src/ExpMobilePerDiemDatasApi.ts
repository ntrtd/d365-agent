/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobilePerDiemDatas } from './ExpMobilePerDiemDatas';
import { ExpMobilePerDiemDatasRequestBuilder } from './ExpMobilePerDiemDatasRequestBuilder';
import { TrvFirstLastBoth } from './TrvFirstLastBoth';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ExpMobilePerDiemDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobilePerDiemDatas<DeSerializersT>, DeSerializersT>
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
  ): ExpMobilePerDiemDatasApi<DeSerializersT> {
    return new ExpMobilePerDiemDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobilePerDiemDatas;

  requestBuilder(): ExpMobilePerDiemDatasRequestBuilder<DeSerializersT> {
    return new ExpMobilePerDiemDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobilePerDiemDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobilePerDiemDatas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobilePerDiemDatas<DeSerializersT>,
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
    typeof ExpMobilePerDiemDatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobilePerDiemDatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUMBER_OF_HRS_DAY: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE_OF_DATE: EnumField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      TrvFirstLastBoth,
      true,
      true
    >;
    NUMBER_OF_BREAKFAST: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_CODE: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MEALSAND_INCIDENTALS_MST: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRV_EXP_TRANS: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_OF_LUNCH: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_DINNER: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEAL_DEDUCTION: OrderableEdmTypeField<
      ExpMobilePerDiemDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobilePerDiemDatas<DeSerializers>>;
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
         * Static representation of the {@link entRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link numberOfHrsDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_HRS_DAY: fieldBuilder.buildEdmTypeField(
          'NumberOfHrsDay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link typeOfDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_DATE: fieldBuilder.buildEnumField(
          'TypeOfDate',
          TrvFirstLastBoth,
          true
        ),
        /**
         * Static representation of the {@link numberOfBreakfast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_BREAKFAST: fieldBuilder.buildEdmTypeField(
          'NumberOfBreakfast',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link exchangeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_CODE: fieldBuilder.buildEdmTypeField(
          'ExchangeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mealsandIncidentalsMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEALSAND_INCIDENTALS_MST: fieldBuilder.buildEdmTypeField(
          'MealsandIncidentalsMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trvExpTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_EXP_TRANS: fieldBuilder.buildEdmTypeField(
          'TrvExpTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link numberOfLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_LUNCH: fieldBuilder.buildEdmTypeField(
          'NumberOfLunch',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DINNER: fieldBuilder.buildEdmTypeField(
          'NumberOfDinner',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mealDeduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_DEDUCTION: fieldBuilder.buildEdmTypeField(
          'MealDeduction',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobilePerDiemDatas)
      };
    }

    return this._schema;
  }
}
