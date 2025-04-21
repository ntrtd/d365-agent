/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryTreatmentTypes } from './InjuryTreatmentTypes';
import { InjuryTreatmentTypesRequestBuilder } from './InjuryTreatmentTypesRequestBuilder';
import { InjuryIncidentTreatmentsApi } from './InjuryIncidentTreatmentsApi';
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
export class InjuryTreatmentTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryTreatmentTypes<DeSerializersT>, DeSerializersT>
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
  ): InjuryTreatmentTypesApi<DeSerializersT> {
    return new InjuryTreatmentTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidentTreatment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_TREATMENT: OneToManyLink<
      InjuryTreatmentTypes<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentTreatmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InjuryIncidentTreatmentsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INJURY_INCIDENT_TREATMENT: new OneToManyLink(
        'InjuryIncidentTreatment',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InjuryTreatmentTypes;

  requestBuilder(): InjuryTreatmentTypesRequestBuilder<DeSerializersT> {
    return new InjuryTreatmentTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryTreatmentTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InjuryTreatmentTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InjuryTreatmentTypes<DeSerializersT>,
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
    typeof InjuryTreatmentTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryTreatmentTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TREATMENT_TYPE_ID: OrderableEdmTypeField<
      InjuryTreatmentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InjuryTreatmentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidentTreatment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_TREATMENT: OneToManyLink<
      InjuryTreatmentTypes<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentTreatmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryTreatmentTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link treatmentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREATMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TreatmentTypeId',
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
        ALL_FIELDS: new AllFields('*', InjuryTreatmentTypes)
      };
    }

    return this._schema;
  }
}
