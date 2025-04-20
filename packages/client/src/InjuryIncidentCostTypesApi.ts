/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryIncidentCostTypes } from './InjuryIncidentCostTypes';
import { InjuryIncidentCostTypesRequestBuilder } from './InjuryIncidentCostTypesRequestBuilder';
import { InjuryCostTypesApi } from './InjuryCostTypesApi';
import { InjuryIncidentsApi } from './InjuryIncidentsApi';
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
export class InjuryIncidentCostTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryIncidentCostTypes<DeSerializersT>, DeSerializersT>
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
  ): InjuryIncidentCostTypesApi<DeSerializersT> {
    return new InjuryIncidentCostTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link injuryCostType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_COST_TYPE: OneToOneLink<
      InjuryIncidentCostTypes<DeSerializersT>,
      DeSerializersT,
      InjuryCostTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncident} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT: OneToOneLink<
      InjuryIncidentCostTypes<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InjuryCostTypesApi<DeSerializersT>,
      InjuryIncidentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INJURY_COST_TYPE: new OneToOneLink('InjuryCostType', this, linkedApis[0]),
      INJURY_INCIDENT: new OneToOneLink('InjuryIncident', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = InjuryIncidentCostTypes;

  requestBuilder(): InjuryIncidentCostTypesRequestBuilder<DeSerializersT> {
    return new InjuryIncidentCostTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryIncidentCostTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InjuryIncidentCostTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InjuryIncidentCostTypes<DeSerializersT>,
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
    typeof InjuryIncidentCostTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryIncidentCostTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CASE_NUMBER: OrderableEdmTypeField<
      InjuryIncidentCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      InjuryIncidentCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_DATE: OrderableEdmTypeField<
      InjuryIncidentCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_TYPE_ID: OrderableEdmTypeField<
      InjuryIncidentCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      InjuryIncidentCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryCostType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_COST_TYPE: OneToOneLink<
      InjuryIncidentCostTypes<DeSerializersT>,
      DeSerializersT,
      InjuryCostTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncident} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT: OneToOneLink<
      InjuryIncidentCostTypes<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryIncidentCostTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link caseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CaseNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_DATE: fieldBuilder.buildEdmTypeField(
          'CostDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CostTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InjuryIncidentCostTypes)
      };
    }

    return this._schema;
  }
}
