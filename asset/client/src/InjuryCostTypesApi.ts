/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryCostTypes } from './InjuryCostTypes';
import { InjuryCostTypesRequestBuilder } from './InjuryCostTypesRequestBuilder';
import { InjuryIncidentCostTypesApi } from './InjuryIncidentCostTypesApi';
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
export class InjuryCostTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryCostTypes<DeSerializersT>, DeSerializersT>
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
  ): InjuryCostTypesApi<DeSerializersT> {
    return new InjuryCostTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidentCostType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_COST_TYPE: OneToManyLink<
      InjuryCostTypes<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentCostTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InjuryIncidentCostTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INJURY_INCIDENT_COST_TYPE: new OneToManyLink(
        'InjuryIncidentCostType',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InjuryCostTypes;

  requestBuilder(): InjuryCostTypesRequestBuilder<DeSerializersT> {
    return new InjuryCostTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryCostTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InjuryCostTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InjuryCostTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InjuryCostTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryCostTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_TYPE_ID: OrderableEdmTypeField<
      InjuryCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InjuryCostTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidentCostType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_COST_TYPE: OneToManyLink<
      InjuryCostTypes<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentCostTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryCostTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link costTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CostTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InjuryCostTypes)
      };
    }

    return this._schema;
  }
}
