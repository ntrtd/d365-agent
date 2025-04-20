/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeSeverityRuleSets } from './EngineeringChangeSeverityRuleSets';
import { EngineeringChangeSeverityRuleSetsRequestBuilder } from './EngineeringChangeSeverityRuleSetsRequestBuilder';
import { EngineeringChangeSeverityRulesApi } from './EngineeringChangeSeverityRulesApi';
import { EngineeringChangeSeveritiesApi } from './EngineeringChangeSeveritiesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeSeverityRuleSetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeSeverityRuleSets<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeSeverityRuleSetsApi<DeSerializersT> {
    return new EngineeringChangeSeverityRuleSetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeSeverityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY_RULES: OneToManyLink<
      EngineeringChangeSeverityRuleSets<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeverityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeSeverity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY: OneToOneLink<
      EngineeringChangeSeverityRuleSets<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeveritiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeSeverityRulesApi<DeSerializersT>,
      EngineeringChangeSeveritiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_SEVERITY_RULES: new OneToManyLink(
        'EngineeringChangeSeverityRules',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_SEVERITY: new OneToOneLink(
        'EngineeringChangeSeverity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeSeverityRuleSets;

  requestBuilder(): EngineeringChangeSeverityRuleSetsRequestBuilder<DeSerializersT> {
    return new EngineeringChangeSeverityRuleSetsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeSeverityRuleSets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeSeverityRuleSets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeSeverityRuleSets<DeSerializersT>,
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
    typeof EngineeringChangeSeverityRuleSets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeSeverityRuleSets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeSeverityRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEVERITY_NAME: OrderableEdmTypeField<
      EngineeringChangeSeverityRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeSeverityRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeSeverityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY_RULES: OneToManyLink<
      EngineeringChangeSeverityRuleSets<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeverityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeSeverity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY: OneToOneLink<
      EngineeringChangeSeverityRuleSets<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeveritiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeSeverityRuleSets<DeSerializers>>;
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
         * Static representation of the {@link severityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVERITY_NAME: fieldBuilder.buildEdmTypeField(
          'SeverityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeSeverityRuleSets)
      };
    }

    return this._schema;
  }
}
