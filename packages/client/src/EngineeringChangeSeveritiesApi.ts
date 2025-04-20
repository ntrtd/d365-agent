/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeSeverities } from './EngineeringChangeSeverities';
import { EngineeringChangeSeveritiesRequestBuilder } from './EngineeringChangeSeveritiesRequestBuilder';
import { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
import { EngineeringChangeSeverityRuleSetsApi } from './EngineeringChangeSeverityRuleSetsApi';
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
export class EngineeringChangeSeveritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeSeverities<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeSeveritiesApi<DeSerializersT> {
    return new EngineeringChangeSeveritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      EngineeringChangeSeverities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeSeverityRuleSets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY_RULE_SETS: OneToManyLink<
      EngineeringChangeSeverities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeverityRuleSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderHeadersApi<DeSerializersT>,
      EngineeringChangeSeverityRuleSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_HEADERS: new OneToManyLink(
        'EngineeringChangeOrderHeaders',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_SEVERITY_RULE_SETS: new OneToManyLink(
        'EngineeringChangeSeverityRuleSets',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeSeverities;

  requestBuilder(): EngineeringChangeSeveritiesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeSeveritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeSeverities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeSeverities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeSeverities<DeSerializersT>,
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
    typeof EngineeringChangeSeverities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeSeverities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEVERITY_NAME: OrderableEdmTypeField<
      EngineeringChangeSeverities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeSeverities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      EngineeringChangeSeverities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeSeverityRuleSets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY_RULE_SETS: OneToManyLink<
      EngineeringChangeSeverities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeverityRuleSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeSeverities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
        ALL_FIELDS: new AllFields('*', EngineeringChangeSeverities)
      };
    }

    return this._schema;
  }
}
