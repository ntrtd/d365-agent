/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjPeriodEmplEntity_DataEntities } from './ProjPeriodEmplEntity_DataEntities';
import { ProjPeriodEmplEntity_DataEntitiesRequestBuilder } from './ProjPeriodEmplEntity_DataEntitiesRequestBuilder';
import { NoYes } from './NoYes';
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
export class ProjPeriodEmplEntity_DataEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjPeriodEmplEntity_DataEntities<DeSerializersT>, DeSerializersT>
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
  ): ProjPeriodEmplEntity_DataEntitiesApi<DeSerializersT> {
    return new ProjPeriodEmplEntity_DataEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjPeriodEmplEntity_DataEntities;

  requestBuilder(): ProjPeriodEmplEntity_DataEntitiesRequestBuilder<DeSerializersT> {
    return new ProjPeriodEmplEntity_DataEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjPeriodEmplEntity_DataEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjPeriodEmplEntity_DataEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjPeriodEmplEntity_DataEntities<DeSerializersT>,
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
    typeof ProjPeriodEmplEntity_DataEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjPeriodEmplEntity_DataEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_FROM: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_POSTED: EnumField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NORM_BILLABLE: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NORM_EFFICIENCY: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTED_DATE: OrderableEdmTypeField<
      ProjPeriodEmplEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjPeriodEmplEntity_DataEntities<DeSerializers>>;
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
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_FROM: fieldBuilder.buildEdmTypeField(
          'PeriodFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link normBillable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NORM_BILLABLE: fieldBuilder.buildEdmTypeField(
          'NormBillable',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link normEfficiency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NORM_EFFICIENCY: fieldBuilder.buildEdmTypeField(
          'NormEfficiency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE: fieldBuilder.buildEdmTypeField(
          'PostedDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjPeriodEmplEntity_DataEntities)
      };
    }

    return this._schema;
  }
}
