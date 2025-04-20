/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangePriorities } from './EngineeringChangePriorities';
import { EngineeringChangePrioritiesRequestBuilder } from './EngineeringChangePrioritiesRequestBuilder';
import { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
import { EngineeringChangeRequestHeadersApi } from './EngineeringChangeRequestHeadersApi';
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
export class EngineeringChangePrioritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangePriorities<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangePrioritiesApi<DeSerializersT> {
    return new EngineeringChangePrioritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      EngineeringChangePriorities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_HEADERS: OneToManyLink<
      EngineeringChangePriorities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderHeadersApi<DeSerializersT>,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_HEADERS: new OneToManyLink(
        'EngineeringChangeOrderHeaders',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_REQUEST_HEADERS: new OneToManyLink(
        'EngineeringChangeRequestHeaders',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangePriorities;

  requestBuilder(): EngineeringChangePrioritiesRequestBuilder<DeSerializersT> {
    return new EngineeringChangePrioritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangePriorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangePriorities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangePriorities<DeSerializersT>,
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
    typeof EngineeringChangePriorities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangePriorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRIORITY_NAME: OrderableEdmTypeField<
      EngineeringChangePriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangePriorities<DeSerializers>,
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
      EngineeringChangePriorities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_HEADERS: OneToManyLink<
      EngineeringChangePriorities<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangePriorities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link priorityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY_NAME: fieldBuilder.buildEdmTypeField(
          'PriorityName',
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
        ALL_FIELDS: new AllFields('*', EngineeringChangePriorities)
      };
    }

    return this._schema;
  }
}
